// Precompiles the mind-map portfolio's JSX into a single plain-JS bundle so
// the shipped page needs no in-browser Babel transform.
//
// Each source file assigns its exports onto `window.*` (no import/export
// statements), so we don't need esbuild's module bundler — just its JSX
// transform, run per file and concatenated in dependency order. Every file
// is wrapped in its own IIFE; they only ever communicate through `window`,
// so scoping each one independently is safe.
import { transformSync } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';

// Dependency order: data before the components that read window.PROFILE /
// window.SPOKES / etc., ProjectModal before MindMap (which renders it),
// app.jsx last since it mounts the tree.
const files = [
  'components/data.js',
  'components/mindmap-data.js',
  'components/Work.jsx',
  'components/MindMap.jsx',
  'components/AboutPanel.jsx',
  'src/app.jsx',
];

let bundle = '"use strict";\n';
for (const rel of files) {
  const abs = path.join(root, rel);
  const source = fs.readFileSync(abs, 'utf8');
  const { code } = transformSync(source, {
    loader: rel.endsWith('.jsx') ? 'jsx' : 'js',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    sourcefile: rel,
  });
  bundle += `\n/* ---- ${rel} ---- */\n(function () {\n${code}\n})();\n`;
}

const outDir = path.join(root, 'assets/js');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'mindmap.bundle.js');
fs.writeFileSync(outFile, bundle);
console.log('built', path.relative(root, outFile), `(${(bundle.length / 1024).toFixed(1)} KB)`);
