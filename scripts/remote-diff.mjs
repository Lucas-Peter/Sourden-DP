/**
 * SOURDEN — remote parity check
 * ---------------------------------------------------------------------------
 * Compares the local working tree against what is actually on GitHub, so the
 * gap that today only surfaces in Cloudflare's build log becomes visible while
 * it is still cheap to fix.
 *
 * WHY THIS EXISTS — two real incidents, both invisible to `npm run verify`:
 *   1. `.nojekyll` and `functions/api/.gitkeep` were silently skipped by the
 *      GitHub web uploader, which ignores dot-files unless picked by hand.
 *   2. One file was deleted when a different file was meant to be deleted; the
 *      intended target stayed behind. The Cloudflare build then died on
 *      `Could not resolve '../components/ReservationPage.astro'`.
 *
 * `npm run verify` proves the LOCAL tree is complete. It cannot prove the
 * REMOTE tree is, because the remote tree is not on disk. That is the gap this
 * script closes. Run it after every upload, before expecting a green build.
 *
 * Usage:
 *   npm run check:remote
 *   SOURDEN_REPO=owner/name SOURDEN_BRANCH=main npm run check:remote
 *
 * Reads only. Downloads a tarball of the branch, extracts it to a temp dir,
 * compares file-by-file by content (never by blob SHA — the web uploader
 * ignores .gitattributes and stores CRLF, so SHAs differ on identical files),
 * then deletes the temp dir.
 *
 * Exit code 1 when anything differs, so it can gate a deploy.
 * ---------------------------------------------------------------------------
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO = process.env.SOURDEN_REPO ?? 'Lucas-Peter/Sourden-DP';
const BRANCH = process.env.SOURDEN_BRANCH ?? 'main';

/** Never uploaded: build output, caches, dependencies, VCS state. */
const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  '.astro',
  '.wrangler',
  '.git',
  '.output',
  '.cache',
  '.vscode',
  '.idea',
  '.pnpm-store',
]);

/** Never uploaded. `.env.example` is deliberately absent from this list. */
const SKIP_FILES = new Set([
  '.env',
  '.dev.vars',
  'Thumbs.db',
  '.DS_Store',
  'desktop.ini',
  '.eslintcache',
]);

const shouldSkip = (name) =>
  SKIP_FILES.has(name) || name.endsWith('.log') || (/^\.env\./.test(name) && name !== '.env.example');

/** Every uploadable file under `root`, as repo-relative POSIX paths. */
function walk(root) {
  const found = [];
  (function recurse(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (SKIP_DIRS.has(entry.name)) continue;
        recurse(path.join(dir, entry.name));
        continue;
      }
      if (shouldSkip(entry.name)) continue;
      found.push(path.relative(root, path.join(dir, entry.name)).split(path.sep).join('/'));
    }
  })(root);
  return found.sort();
}

/**
 * latin1 maps bytes 1:1, so it neither corrupts UTF-8 sequences nor chokes on
 * binary assets. CRLF is normalised away: the web uploader writes CRLF while
 * the local tree is LF, and that difference is not a real difference.
 */
const read = (root, rel) =>
  fs.readFileSync(path.join(root, rel), 'latin1').replace(/\r\n/g, '\n');

async function downloadRemote() {
  const url = `https://codeload.github.com/${REPO}/tar.gz/refs/heads/${BRANCH}`;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sourden-remote-'));
  const archive = 'repo.tar.gz';

  let res;
  try {
    res = await fetch(url);
  } catch (error) {
    throw new Error(`cannot reach GitHub (${error.message}). Check the network and try again.`);
  }
  if (!res.ok) {
    throw new Error(`GitHub returned ${res.status} for ${url} — check the repo name and branch.`);
  }
  fs.writeFileSync(path.join(tmp, archive), Buffer.from(await res.arrayBuffer()));

  // Relative paths together with cwd: Git Bash's GNU tar reads a "C:/..." arg
  // as a remote host ("Cannot connect to C: resolve failed"), and --force-local
  // is GNU-only, so relative + cwd is the portable form.
  try {
    execFileSync('tar', ['-xzf', archive, '-C', '.'], { cwd: tmp, stdio: 'pipe' });
  } catch (error) {
    throw new Error(`could not extract the archive (is "tar" on PATH?): ${error.message}`);
  }

  const dirs = fs
    .readdirSync(tmp)
    .map((name) => path.join(tmp, name))
    .filter((abs) => fs.statSync(abs).isDirectory());

  if (dirs.length !== 1) {
    throw new Error(`expected one top-level directory in the archive, found ${dirs.length}.`);
  }
  return { root: dirs[0], cleanup: () => fs.rmSync(tmp, { recursive: true, force: true }) };
}

function report(title, items, hint) {
  console.log('');
  console.log(`${title} (${items.length})`);
  if (items.length === 0) {
    console.log('  none');
    return;
  }
  if (hint) console.log(`  ${hint}`);
  for (const item of items) console.log('  ' + item);
}

async function main() {
  console.log(`SOURDEN — remote parity check`);
  console.log(`repo: ${REPO}  branch: ${BRANCH}`);
  console.log(`local: ${ROOT}`);

  const remote = await downloadRemote();
  try {
    const localFiles = walk(ROOT);
    const remoteFiles = walk(remote.root);
    const remoteSet = new Set(remoteFiles);
    const localSet = new Set(localFiles);

    const missing = localFiles.filter((rel) => !remoteSet.has(rel));
    const extra = remoteFiles.filter((rel) => !localSet.has(rel));
    const changed = localFiles.filter(
      (rel) => remoteSet.has(rel) && read(ROOT, rel) !== read(remote.root, rel),
    );

    console.log('');
    console.log(`local files:  ${localFiles.length}`);
    console.log(`remote files: ${remoteFiles.length}`);

    report('① ON DISK BUT NOT ON GITHUB — upload these', missing, 'These break the Cloudflare build when imported.');
    report('② ON GITHUB BUT NOT ON DISK — delete these', extra, 'The web uploader never syncs deletions; leftovers linger.');
    report('③ CONTENT DIFFERS — update these', changed);

    const problems = missing.length + extra.length + changed.length;
    console.log('');
    if (problems === 0) {
      console.log('✓ IN SYNC — GitHub matches this working tree exactly.');
      return;
    }
    console.log(`✗ ${problems} difference(s). Cloudflare builds from GitHub, not from this disk.`);
    console.log('  Fix these on GitHub, then re-run this check before trusting a build.');
    process.exitCode = 1;
  } finally {
    remote.cleanup();
  }
}

main().catch((error) => {
  console.error('');
  console.error(`!! ${error.message}`);
  process.exitCode = 1;
});
