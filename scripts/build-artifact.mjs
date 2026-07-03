// Builds a single self-contained HTML file for live-preview purposes only
// (e.g. rendering in a Claude Artifact, whose CSP blocks separate scripts,
// external fonts, and external images). Inlines React/ReactDOM/lucide, the
// compiled component bundle, the design-system CSS, Poppins/Roboto as
// @font-face data URIs, and every referenced project/profile image as a
// data URI.
//
// This is NOT the shipped site — that's the real multi-file build produced
// by build.mjs + vendor.mjs. This script just mirrors it into one portable
// file so edits can be previewed without a server.
import { transformSync } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const readBuf = (p) => fs.readFileSync(path.join(root, p));

// ---- 1. Compile the component bundle (same order/transform as build.mjs) ----
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
  const { code } = transformSync(read(rel), {
    loader: rel.endsWith('.jsx') ? 'jsx' : 'js',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    sourcefile: rel,
  });
  bundle += `\n/* ---- ${rel} ---- */\n(function () {\n${code}\n})();\n`;
}

// ---- 2. Inline every referenced local image as a data URI ----
// Auto-detected from source rather than hardcoded, so adding/renaming a
// project image never silently goes stale here again — just scan every
// compiled file for 'assets/...(png|jpe?g)' string literals.
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };
const imagePaths = [...new Set(
  [...bundle.matchAll(/assets\/[\w.-]+\.(?:png|jpe?g)/g)].map((m) => m[0])
)];
for (const imgPath of imagePaths) {
  const ext = path.extname(imgPath);
  const dataUri = `data:${MIME[ext]};base64,${readBuf(imgPath).toString('base64')}`;
  bundle = bundle.split(imgPath).join(dataUri);
}

// ---- 3. Design-system CSS, minus the Google Fonts CDN @import ----
const designCss = read('assets/colors_and_type.css').replace(/@import\s+url\([^)]*\)\s*;\s*/, '');

// ---- 4. Poppins / Roboto as @font-face data URIs (fontsource-provided woff2) ----
const FONT_FILES = [
  ['Poppins', 300, '@fontsource/poppins/files/poppins-latin-300-normal.woff2'],
  ['Poppins', 400, '@fontsource/poppins/files/poppins-latin-400-normal.woff2'],
  ['Poppins', 500, '@fontsource/poppins/files/poppins-latin-500-normal.woff2'],
  ['Poppins', 600, '@fontsource/poppins/files/poppins-latin-600-normal.woff2'],
  ['Poppins', 700, '@fontsource/poppins/files/poppins-latin-700-normal.woff2'],
  ['Roboto', 300, '@fontsource/roboto/files/roboto-latin-300-normal.woff2'],
  ['Roboto', 400, '@fontsource/roboto/files/roboto-latin-400-normal.woff2'],
  ['Roboto', 500, '@fontsource/roboto/files/roboto-latin-500-normal.woff2'],
];
const fontFaces = FONT_FILES.map(([family, weight, pkgPath]) => {
  const b64 = fs.readFileSync(path.join(root, 'node_modules', pkgPath)).toString('base64');
  return `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};` +
    `font-display:swap;src:url(data:font/woff2;base64,${b64}) format('woff2');}`;
}).join('\n');

// ---- 5. Assemble ----
const vendor = [
  'assets/vendor/react.production.min.js',
  'assets/vendor/react-dom.production.min.js',
  'assets/vendor/lucide.min.js',
].map(read).join('\n;\n');

const html = `<title>Annabelle Clark-Lepard — Mind Map Portfolio (Live Preview)</title>
<style>
${fontFaces}
${designCss}
* { box-sizing: border-box; }
:root { --color-stone-aa: #5A6572; --branch-aa: #7E8A97; }
html, body { margin: 0; padding: 0; background: var(--color-cloud); }
#app { font-family: var(--font-body); }
a { color: inherit; }
::selection { background: var(--color-pale-green); }
button { font-family: inherit; }
</style>
<div id="app"></div>
<script>
${vendor}
</script>
<script>
${bundle}
</script>
`;

const outFile = path.join(root, '..', '.artifact-preview', 'mindmap-preview.html');
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, html);
console.log('built', path.relative(path.join(root, '..'), outFile), `(${(html.length / 1024 / 1024).toFixed(2)} MB)`);
