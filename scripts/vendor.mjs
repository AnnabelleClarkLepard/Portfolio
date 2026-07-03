// Copies the runtime deps (React, ReactDOM, lucide) from node_modules into
// assets/vendor so the shipped page loads them locally instead of from a CDN.
// Re-run after bumping versions in package.json + npm install.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const outDir = path.join(root, 'assets/vendor');
fs.mkdirSync(outDir, { recursive: true });

const copies = [
  ['node_modules/react/umd/react.production.min.js', 'react.production.min.js'],
  ['node_modules/react-dom/umd/react-dom.production.min.js', 'react-dom.production.min.js'],
  ['node_modules/lucide/dist/umd/lucide.min.js', 'lucide.min.js'],
];

for (const [src, dest] of copies) {
  fs.copyFileSync(path.join(root, src), path.join(outDir, dest));
  console.log('vendored', dest);
}
