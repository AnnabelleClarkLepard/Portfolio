/* MindMap.jsx — radial mind-map portfolio canvas.
   Center = profile photo (opens About). Category spokes expand into a second
   level of sub-spokes (project + focus-area nodes) branching outward.
   Reuses window.ProjectModal. */

const MM_CSS = `
  .mm-stage{position:relative;width:100%;height:100vh;min-height:500px;overflow:hidden;
    background:var(--color-cloud);font-family:var(--font-body);}
  .mm-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:5;}
  .mm-branch{stroke:var(--branch-aa);stroke-width:1.5;vector-effect:non-scaling-stroke;
    transition:stroke .4s ease,opacity .4s ease,stroke-width .4s ease;}
  .mm-branch.on{stroke:var(--accent);stroke-width:2.5;}
  .mm-branch.off{opacity:.28;}
  .mm-branch.hide{opacity:0;}
  .mm-ring{fill:none;stroke:var(--color-silver);opacity:.4;vector-effect:non-scaling-stroke;}
  .mm-childbranch{stroke:var(--accent);stroke-width:1.75;vector-effect:non-scaling-stroke;
    stroke-linecap:round;stroke-dasharray:5 5;animation:mm-dash .5s ease both;}
  @keyframes mm-dash{from{stroke-dashoffset:20;opacity:0;}to{stroke-dashoffset:0;opacity:.9;}}

  /* center node */
  .mm-center{position:absolute;transform:translate(-50%,-50%);z-index:30;
    display:flex;flex-direction:column;align-items:center;gap:14px;
    transition:opacity .35s ease,filter .35s ease;cursor:pointer;
    -webkit-tap-highlight-color:transparent;}
  .mm-center.dim{opacity:.22;filter:saturate(.7);pointer-events:none;}
  .mm-center.hidden{opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(.9);}
  .mm-photo-wrap{position:relative;width:176px;height:176px;border-radius:999px;
    padding:6px;background:#fff;box-shadow:var(--shadow-lg);
    transition:transform .3s ease,box-shadow .3s ease;}
  .mm-center:hover .mm-photo-wrap{transform:translateY(-3px);box-shadow:var(--shadow-xl);}
  .mm-photo-ring{position:absolute;inset:-6px;border-radius:999px;
    border:2px solid var(--accent);opacity:.55;transition:opacity .3s ease;}
  .mm-center:hover .mm-photo-ring{opacity:1;}
  .mm-photo{width:100%;height:100%;border-radius:999px;object-fit:cover;display:block;}
  .mm-photo-cta{position:absolute;left:50%;bottom:-2px;transform:translate(-50%,50%);
    background:var(--accent);color:#fff;font-family:var(--font-heading);font-weight:600;
    font-size:12.5px;letter-spacing:.02em;padding:7px 16px;border-radius:999px;white-space:nowrap;
    box-shadow:var(--shadow-md);display:flex;align-items:center;gap:6px;
    transition:background .25s ease,transform .25s ease;}
  .mm-center:hover .mm-photo-cta{transform:translate(-50%,50%) translateY(-1px);
    background:var(--accent-hover);}
  .mm-center-name{text-align:center;margin-top:8px;}
  .mm-center-name b{display:block;font-family:var(--font-heading);font-weight:600;
    font-size:16px;color:var(--color-navy);letter-spacing:-.01em;}
  .mm-center-name span{display:block;font-size:12px;color:var(--color-stone-aa);margin-top:2px;
    letter-spacing:.04em;}

  /* category spoke node */
  .mm-node{position:absolute;transform:translate(-50%,-50%);z-index:20;width:186px;
    background:#fff;border:1px solid var(--color-silver);border-radius:14px;
    padding:16px 16px 14px;cursor:pointer;text-align:left;
    box-shadow:var(--shadow-xs);-webkit-tap-highlight-color:transparent;
    transition:transform .45s cubic-bezier(.4,.1,.2,1),left .45s cubic-bezier(.4,.1,.2,1),top .45s cubic-bezier(.4,.1,.2,1),box-shadow .28s ease,border-color .28s ease,opacity .35s ease,background .28s ease;}
  .mm-node.hidden{opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(.88);}
  .mm-node:hover{transform:translate(-50%,-50%) translateY(-4px);box-shadow:var(--shadow-md);
    border-color:var(--accent);}
  .mm-node.active{border-color:var(--accent);background:var(--color-pale-green);
    box-shadow:var(--shadow-lg);z-index:60;
    transform:translate(-50%,-50%) scale(1.03);}
  .mm-node.dim{opacity:.28;filter:saturate(.7);pointer-events:none;}
  .mm-node-ico{width:38px;height:38px;border-radius:10px;background:var(--color-pale-blue);
    color:var(--accent);display:flex;align-items:center;justify-content:center;margin-bottom:12px;
    transition:background .28s ease;}
  .mm-node.active .mm-node-ico{background:#fff;}
  .mm-node-ico svg{width:20px;height:20px;}
  .mm-node h3{margin:0;font-family:var(--font-heading);font-weight:600;font-size:16px;
    line-height:1.25;color:var(--color-navy);}
  .mm-node .mm-node-sub{display:block;font-family:var(--font-body);font-weight:400;
    font-size:13px;color:var(--color-slate);margin-top:2px;}
  .mm-node-meta{display:flex;align-items:center;gap:6px;margin-top:12px;
    font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--color-stone-aa);
    font-weight:500;}
  .mm-node-meta .dotb{width:5px;height:5px;border-radius:999px;background:var(--accent);}

  /* child sub-spoke nodes */
  .mm-child{position:absolute;transform:translate(-50%,-50%);z-index:55;
    animation:mm-pop .32s cubic-bezier(.3,.7,.4,1) both;}
  @keyframes mm-pop{from{opacity:0;transform:translate(-50%,-50%) scale(.9);}
    to{opacity:1;transform:translate(-50%,-50%) scale(1);}}
  .mm-cproj{width:186px;text-align:left;background:#fff;border:1px solid var(--color-silver);
    border-radius:12px;padding:0;cursor:pointer;box-shadow:var(--shadow-sm);overflow:hidden;
    transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;}
  .mm-cproj:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg);border-color:var(--accent);}
  .mm-cproj-thumb{height:64px;position:relative;
    background:linear-gradient(150deg,var(--color-pale-blue),var(--color-pale-green));
    display:flex;align-items:flex-end;justify-content:flex-start;padding:9px;overflow:hidden;}
  .mm-cproj-thumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  .mm-cproj-thumb .ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
    color:var(--accent);}
  .mm-cproj-thumb .ph svg{width:26px;height:26px;opacity:.85;}
  .mm-cproj-thumb .tag{position:relative;z-index:1;background:#fff;color:var(--accent);
    font-size:9.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:3px 8px;
    border-radius:4px;box-shadow:var(--shadow-xs);}
  .mm-cproj-body{padding:10px 13px 12px;}
  .mm-cproj .ttl{font-family:var(--font-heading);font-weight:600;font-size:13px;line-height:1.3;
    color:var(--color-charcoal);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;
    overflow:hidden;}
  .mm-cproj .lnk{font-size:11.5px;font-weight:500;color:var(--accent);display:inline-flex;
    align-items:center;gap:5px;margin-top:7px;}
  .mm-cproj:hover .lnk .arw{transform:translateX(3px);}
  .mm-cproj .lnk .arw{transition:transform .22s ease;}
  .mm-cexp{width:158px;background:var(--color-pale-blue);border:1px solid var(--color-silver);
    border-radius:11px;padding:11px 12px;cursor:default;box-shadow:var(--shadow-xs);}
  .mm-cexp .type{font-size:9px;letter-spacing:.07em;text-transform:uppercase;color:var(--color-stone-aa);
    font-weight:600;display:flex;align-items:center;gap:6px;margin-bottom:8px;}
  .mm-cexp .type .eico{width:22px;height:22px;border-radius:6px;background:#fff;color:var(--accent);
    display:flex;align-items:center;justify-content:center;}
  .mm-cexp .type .eico svg{width:13px;height:13px;}
  .mm-cexp .nm{font-family:var(--font-heading);font-weight:600;font-size:13px;line-height:1.3;
    color:var(--color-navy);}
  .mm-cempty{width:210px;background:#fff;border:1px dashed var(--color-stone);border-radius:12px;
    padding:18px 18px 16px;box-shadow:var(--shadow-xs);}
  .mm-cempty svg{width:22px;height:22px;color:var(--accent);}
  .mm-cempty .et{font-family:var(--font-heading);font-weight:600;font-size:14px;color:var(--color-navy);
    margin:10px 0 5px;}
  .mm-cempty p{margin:0;font-size:12.5px;line-height:1.55;color:var(--color-slate);}
  .mm-cempty p b{color:var(--color-navy);}

  /* catcher */
  .mm-catcher{position:absolute;inset:0;z-index:40;cursor:default;}
  .mm-catcher.scrim{background:rgba(26,31,36,.28);}

  /* shared expansion content (side-panel mode) */
  .mm-panel-hd{display:flex;align-items:flex-start;gap:12px;}
  .mm-panel-hd .ico{width:40px;height:40px;border-radius:10px;background:var(--color-pale-blue);
    color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .mm-panel-hd .ico svg{width:21px;height:21px;}
  .mm-panel-hd h3{margin:0;font-family:var(--font-heading);font-weight:600;font-size:19px;
    color:var(--color-navy);line-height:1.2;}
  .mm-panel-hd .sub{font-size:13px;color:var(--color-slate);margin-top:2px;}
  .mm-x{margin-left:auto;flex-shrink:0;appearance:none;border:1px solid var(--color-silver);
    background:#fff;width:30px;height:30px;border-radius:999px;display:flex;align-items:center;
    justify-content:center;cursor:pointer;color:var(--color-slate);transition:all .2s ease;}
  .mm-x:hover{background:var(--color-cloud);color:var(--color-navy);border-color:var(--color-stone);}
  .mm-x svg{width:16px;height:16px;}
  .mm-blurb{font-size:14px;line-height:1.65;color:var(--color-graphite);margin:14px 0 0;}
  .mm-sublabel{display:flex;align-items:center;gap:10px;margin:22px 0 12px;}
  .mm-sublabel span:first-child{width:18px;height:3px;border-radius:2px;background:var(--accent);}
  .mm-sublabel b{font-family:var(--font-heading);font-weight:600;font-size:11px;
    letter-spacing:.07em;text-transform:uppercase;color:var(--color-navy);}

  .mm-proj{display:flex;gap:14px;align-items:stretch;width:100%;text-align:left;
    background:#fff;border:1px solid var(--color-silver);border-radius:12px;padding:12px;
    cursor:pointer;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;}
  .mm-proj + .mm-proj{margin-top:10px;}
  .mm-proj:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);border-color:var(--accent);}
  .mm-proj-thumb{width:76px;flex-shrink:0;border-radius:8px;overflow:hidden;
    background:linear-gradient(150deg,var(--color-pale-blue),var(--color-pale-green));
    display:flex;align-items:center;justify-content:center;}
  .mm-proj-thumb img{width:100%;height:100%;object-fit:cover;display:block;}
  .mm-proj-body{min-width:0;display:flex;flex-direction:column;gap:5px;padding:2px 2px 2px 0;}
  .mm-proj-tag{align-self:flex-start;background:var(--color-pale-green);color:var(--accent);
    font-size:10px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;
    padding:3px 8px;border-radius:4px;}
  .mm-proj-title{font-family:var(--font-heading);font-weight:600;font-size:14.5px;line-height:1.3;
    color:var(--color-charcoal);}
  .mm-proj-link{font-size:12.5px;font-weight:500;color:var(--accent);margin-top:auto;
    display:inline-flex;align-items:center;gap:5px;}
  .mm-proj:hover .mm-proj-link .arw{transform:translateX(3px);}
  .mm-proj-link .arw{transition:transform .22s ease;}

  .mm-exp{display:flex;gap:11px;align-items:flex-start;padding:11px 0;}
  .mm-exp + .mm-exp{border-top:1px solid var(--color-silver);}
  .mm-exp .eico{width:30px;height:30px;border-radius:8px;background:var(--color-pale-blue);
    color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .mm-exp .eico svg{width:16px;height:16px;}
  .mm-exp-h{font-family:var(--font-heading);font-weight:600;font-size:13.5px;color:var(--color-navy);}
  .mm-exp-p{font-size:12.5px;line-height:1.55;color:var(--color-graphite);margin-top:3px;}

  /* side panel */
  .mm-side{position:fixed;top:0;right:0;height:100vh;width:min(440px,92vw);z-index:50;
    background:#fff;border-left:1px solid var(--color-silver);box-shadow:var(--shadow-xl);
    padding:32px 30px 40px;overflow-y:auto;
    animation:mm-slide .34s cubic-bezier(.3,.7,.4,1) both;scrollbar-width:thin;}
  @keyframes mm-slide{from{transform:translateX(100%);}to{transform:translateX(0);}}

  /* header + hint overlays */
  .mm-head{position:absolute;top:26px;left:30px;z-index:35;pointer-events:none;}
  .mm-head .wm{font-family:var(--font-heading);font-weight:600;font-size:17px;color:var(--color-navy);}
  .mm-head .wm i{color:var(--accent);font-style:normal;}
  .mm-head .ov{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-stone-aa);
    margin-top:5px;font-weight:500;}
  /* drill-down chrome */
  .mm-back{position:absolute;top:24px;left:30px;z-index:46;display:inline-flex;align-items:center;
    gap:8px;background:#fff;border:1px solid var(--color-silver);border-radius:999px;
    padding:8px 15px 8px 12px;font-family:var(--font-heading);font-weight:600;font-size:13px;
    color:var(--color-navy);cursor:pointer;box-shadow:var(--shadow-xs);
    transition:border-color .2s ease,transform .2s ease,box-shadow .2s ease;
    animation:mm-fade .3s ease both;}
  .mm-back:hover{border-color:var(--accent);transform:translateX(-2px);box-shadow:var(--shadow-sm);}
  .mm-back svg{width:16px;height:16px;color:var(--accent);}
  @keyframes mm-fade{from{opacity:0;}to{opacity:1;}}
  .mm-drill-blurb{position:absolute;transform:translate(-50%,0);z-index:22;width:min(300px,80vw);
    text-align:center;animation:mm-fade .4s ease both;
    background:var(--color-cloud);padding:14px 18px;border-radius:12px;}
  .mm-drill-blurb .lead{font-size:11px;letter-spacing:.07em;text-transform:uppercase;
    color:var(--color-stone-aa);font-weight:600;margin-bottom:8px;}
  .mm-drill-blurb p{margin:0;font-size:14px;line-height:1.65;color:var(--color-graphite);}
  .mm-drill-blurb.narrow{text-align:center;transform:translate(-50%,0);}

  /* narrow-viewport drill-in: real document flow instead of percentage
     coordinates, so it always fits and scrolls regardless of card count
     or rendered height (percentage math can't know a card's real height). */
  .mm-drill-narrow{position:absolute;inset:0;overflow-y:auto;-webkit-overflow-scrolling:touch;
    display:flex;flex-direction:column;align-items:center;padding:86px 20px 72px;z-index:41;}
  .mm-drill-connector{width:2px;height:40px;flex-shrink:0;
    background:repeating-linear-gradient(to bottom,var(--accent) 0 5px,transparent 5px 10px);}
  .mm-node.static,.mm-child.static{position:static;left:auto;top:auto;transform:none;
    animation:mm-pop-static .32s cubic-bezier(.3,.7,.4,1) both;}
  .mm-node.static:hover{transform:translateY(-2px);}
  .mm-node.static.active{transform:none;}
  @keyframes mm-pop-static{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
  .mm-drill-blurb.static{position:static;transform:none;width:min(340px,86vw);margin:16px 0 6px;}
  .mm-cempty.static{width:min(210px,86vw);}

  /* Hidden earlier (wider) than the card-shrink breakpoint below — measured
     clearance to the overview category cards drops to single digits well
     before 760px, so it needs to disappear at a noticeably wider viewport
     to avoid crowding them. */
  @media (max-width:1100px){
    .mm-center-name{display:none;}
  }

  @media (max-width:760px){
    .mm-node{width:150px;padding:13px;}
    .mm-cproj{width:158px;}
    .mm-cexp{width:140px;}
    .mm-photo-wrap{width:132px;height:132px;}
    .mm-head{left:18px;top:18px;}
  }
`;

function layoutPositions(layout) {
  if (layout === 'tree') {
    return { center: { x: 50, y: 15 }, nodes: [{ x: 15, y: 60 }, { x: 38.3, y: 60 }, { x: 61.7, y: 60 }, { x: 85, y: 60 }] };
  }
  if (layout === 'constellation') {
    return { center: { x: 47, y: 49 }, nodes: [{ x: 18, y: 24 }, { x: 82, y: 20 }, { x: 27, y: 80 }, { x: 76, y: 74 }] };
  }
  return { center: { x: 50, y: 50 }, nodes: [{ x: 24, y: 28 }, { x: 76, y: 28 }, { x: 24, y: 72 }, { x: 76, y: 72 }] };
}

// Rendered height of a .mm-cproj child card (thumb + body) at its fixed
// wide-mode width — used to convert a desired pixel gap into a percentage
// step that's actually correct for the current viewport height, instead of
// a flat percentage cap that goes from roomy to nearly-touching depending
// on how tall the window happens to be.
// Real rendered sizes (measured, not guessed) of the elements the wide
// layout stacks and rows out. Parent card height varies a little with
// sub-label length (145-166px measured across the 4 spokes) and blurb
// height with text length (~97px measured) — both padded up for safety.
const CHILD_CARD_H_PX = 143;
const CHILD_CARD_W_PX = 186;
const PARENT_CARD_H_PX = 175;
const BLURB_H_PX = 115;
const ROW_GAP_PX = 32;
const GAP_AFTER_PARENT_PX = 22;
const GAP_AFTER_BLURB_PX = 26;
// Fixed chrome the drilled-in view must clear: the "All areas" back button
// (top-left) and side margins for the children row. The bottom just needs
// general breathing room now that the hint pill is gone.
const DRILL_TOP_SAFE_PX = 110;
const DRILL_BOTTOM_SAFE_PX = 40;
const DRILL_SIDE_SAFE_PX = 40;

const STACK_MIN_GAP_PX = 56;

// Drill-down layout dispatcher. Categories with 1-2 projects use the
// original design — category card on the left, projects stacked vertically
// on the right — since a short stack essentially never runs out of vertical
// room. Categories with 3-4 projects use a top-parent / horizontal-row
// layout instead, because a vertical stack of that many real-height cards
// routinely overlapped or got clipped at ordinary window heights (that's
// exactly why this split exists). Both are pixel-fit-checked against the
// real viewport and fall back to the same normal-flow scrolling list narrow
// viewports use (see .mm-drill-narrow) whenever they don't fit — so neither
// can ever overlap or clip regardless of window size.
function drillLayout(count, width, height) {
  const slots = Math.max(count, 1);
  const w = width > 0 ? width : 1200;
  const h = height > 0 ? height : 800;
  return slots <= 2 ? drillLayoutLeftStack(slots, w, h) : drillLayoutTopRow(slots, w, h);
}

// 1-2 projects: parent at left, blurb below it, projects stacked vertically
// at right — connected by branch lines fanning from a point beside the
// parent. Neither the parent/blurb column nor the child column ever get
// close to the left/right edges at this fixed 27%/66% split until well
// below the 760px floor already enforced elsewhere, so only vertical fit
// needs checking here.
function drillLayoutLeftStack(slots, w, h) {
  const requiredHeightPx = slots * CHILD_CARD_H_PX + (slots - 1) * STACK_MIN_GAP_PX;
  const availableHeightPx = h - DRILL_TOP_SAFE_PX - DRILL_BOTTOM_SAFE_PX;
  const narrow = w <= 760 || requiredHeightPx > availableHeightPx;
  if (narrow) {
    return { parent: null, origin: null, blurb: null, children: [], narrow: true };
  }
  const parent = { x: 27, y: 40 };
  const childX = 66;
  const halfCardPct = (CHILD_CARD_H_PX / 2 / h) * 100;
  // Band the *center* of each card is allowed to occupy, so its edges (half
  // the card height either side) never land inside the safe-clearance zones.
  const bandTop = (DRILL_TOP_SAFE_PX / h) * 100 + halfCardPct;
  const bandBottom = 100 - (DRILL_BOTTOM_SAFE_PX / h) * 100 - halfCardPct;
  const bandCenter = (bandTop + bandBottom) / 2;
  const maxSpan = bandBottom - bandTop;
  const idealStepPct = ((CHILD_CARD_H_PX + STACK_MIN_GAP_PX) / h) * 100;
  // Guaranteed <= idealStepPct here since requiredHeightPx <= availableHeightPx
  // was just checked above, so this never clamps below card height (no overlap).
  const stepPct = slots > 1 ? Math.min(idealStepPct, maxSpan / (slots - 1)) : 0;
  const span = stepPct * (slots - 1);
  const startY = bandCenter - span / 2;
  const children = [];
  for (let i = 0; i < slots; i++) {
    children.push({ x: childX, y: slots === 1 ? bandCenter : startY + i * stepPct });
  }
  return { parent, origin: { x: 31, y: 40 }, blurb: { x: 27, y: 61 }, children, narrow: false };
}

// 3-4 projects: parent card centered at top, projects in a horizontal row
// beneath it — connected by branch lines fanning down. Falls back to the
// scrolling list when the viewport is too narrow to fit that row (grows
// with project count) or too short to stack parent + blurb + row (a fixed
// requirement, independent of project count).
function drillLayoutTopRow(slots, w, h) {
  const requiredRowPx = slots * CHILD_CARD_W_PX + (slots - 1) * ROW_GAP_PX + DRILL_SIDE_SAFE_PX * 2;
  const requiredVerticalPx = DRILL_TOP_SAFE_PX + PARENT_CARD_H_PX + GAP_AFTER_PARENT_PX +
    BLURB_H_PX + GAP_AFTER_BLURB_PX + CHILD_CARD_H_PX + DRILL_BOTTOM_SAFE_PX;
  // 760 matches the CSS breakpoint that shrinks card widths for narrow
  // screens (see the max-width:760px block below) — below it, the pixel
  // widths above no longer match what actually renders.
  const narrow = w <= 760 || w < requiredRowPx || h < requiredVerticalPx;
  if (narrow) {
    return { parent: null, origin: null, blurb: null, children: [], narrow: true };
  }

  const parentY = ((DRILL_TOP_SAFE_PX + PARENT_CARD_H_PX / 2) / h) * 100;
  const parentBottomPx = DRILL_TOP_SAFE_PX + PARENT_CARD_H_PX;
  const blurbY = ((parentBottomPx + GAP_AFTER_PARENT_PX) / h) * 100;
  const rowY = ((h - DRILL_BOTTOM_SAFE_PX - CHILD_CARD_H_PX / 2) / h) * 100;

  const totalRowWidthPx = slots * CHILD_CARD_W_PX + (slots - 1) * ROW_GAP_PX;
  const firstCenterPx = (w - totalRowWidthPx) / 2 + CHILD_CARD_W_PX / 2;
  const stepXPx = CHILD_CARD_W_PX + ROW_GAP_PX;
  const children = [];
  for (let i = 0; i < slots; i++) {
    children.push({ x: ((firstCenterPx + i * stepXPx) / w) * 100, y: rowY });
  }

  return {
    parent: { x: 50, y: parentY },
    origin: { x: 50, y: parentY + (PARENT_CARD_H_PX / 2 / h) * 100 },
    blurb: { x: 50, y: blurbY },
    children,
    narrow: false,
  };
}

// Ordered children for a spoke: project sub-spokes only.
function spokeChildren(spoke) {
  return window.spokeProjects(spoke).map((p) => ({ type: 'project', data: p, key: 'p-' + p.id }));
}

function Branches({ pos, activeIdx, layout, drill, drillOrigin, drillChildren }) {
  const { center, nodes } = pos;
  const showRings = layout !== 'tree' && !drill;
  return (
    <svg className="mm-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      {showRings && [16, 27].map((r) =>
      <ellipse key={r} className="mm-ring" cx={center.x} cy={center.y} rx={r} ry={r * 0.92} />
      )}
      {nodes.map((n, i) => {
        let cls = 'mm-branch';
        if (drill) cls += ' hide';
        else if (activeIdx === i) cls += ' on';
        else if (activeIdx != null) cls += ' off';
        return <line key={i} className={cls} x1={center.x} y1={center.y} x2={n.x} y2={n.y} />;
      })}
      {drill && drillChildren && drillChildren.map((c, i) =>
      <line key={'c' + i} className="mm-childbranch" x1={drillOrigin.x} y1={drillOrigin.y} x2={c.x} y2={c.y} />
      )}
    </svg>);

}

function CenterNode({ pos, dim, hidden, onAbout }) {
  const P = window.PROFILE;
  return (
    <div className={'mm-center' + (dim ? ' dim' : '') + (hidden ? ' hidden' : '')}
    style={{ left: pos.center.x + '%', top: pos.center.y + '%', gap: '24px' }}
    onClick={(e) => {e.stopPropagation();onAbout();}}
    role="button" tabIndex={0}
    onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();onAbout();}}}>
      <div className="mm-photo-wrap">
        <span className="mm-photo-ring"></span>
        <img className="mm-photo" src="assets/headshot.png" alt={P.name} />
        <span className="mm-photo-cta"><i data-lucide="user"></i>About me</span>
      </div>
      <div className="mm-center-name" style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px' }}>
        <span style={{ backgroundColor: '#FFFFFF', borderRadius: '4px' }}>
          <b>{P.name}</b>
          {' '}{P.role}
        </span>
      </div>
    </div>);

}

function SpokeNode({ spoke, style, state, onClick, staticFlow }) {
  const pc = spoke.projectIds.length;
  const meta = pc > 0 ? `${pc} project${pc > 1 ? 's' : ''}` : 'In progress';
  return (
    <button className={'mm-node' + (staticFlow ? ' static' : '') + (state === 'active' ? ' active' : '') + (state === 'dim' ? ' dim' : '') + (state === 'hidden' ? ' hidden' : '')}
    style={style} onClick={(e) => {e.stopPropagation();onClick();}}>
      <div className="mm-node-ico"><i data-lucide={spoke.icon}></i></div>
      <h3>{spoke.label}<span className="mm-node-sub">{spoke.sub}</span></h3>
      <div className="mm-node-meta"><span className="dotb"></span>{meta}</div>
    </button>);

}

// A second-level sub-spoke node (project card or focus-area chip).
function ChildNode({ child, style, onOpenProject, staticFlow }) {
  if (child.type === 'project') {
    const p = child.data;
    return (
      <div className={'mm-child' + (staticFlow ? ' static' : '')} style={style}>
        <button className="mm-cproj" onClick={(e) => {e.stopPropagation();onOpenProject(p);}}>
          <div className="mm-cproj-thumb">
            {p.image ? <img src={p.image} alt={p.title} /> : <span className="ph"><i data-lucide={p.thumbIcon || 'folder'}></i></span>}
            <span className="tag">{p.tag}</span>
          </div>
          <div className="mm-cproj-body">
            <div className="ttl">{p.title}</div>
            <span className="lnk">View case study <span className="arw">→</span></span>
          </div>
        </button>
      </div>);

  }
  const e = child.data;
  return (
    <div className={'mm-child' + (staticFlow ? ' static' : '')} style={style}>
      <div className="mm-cexp">
        <div className="type"><span className="eico"><i data-lucide={e.icon}></i></span>Focus area</div>
        <div className="nm">{e.h}</div>
      </div>
    </div>);

}

function ExpansionContent({ spoke, onOpenProject, onClose }) {
  const projects = window.spokeProjects(spoke);
  return (
    <>
      <div className="mm-panel-hd" data-comment-anchor="6471c1c062-div-240-7">
        <div className="ico"><i data-lucide={spoke.icon}></i></div>
        <div>
          <h3>{spoke.label}</h3>
          <div className="sub">{spoke.sub}</div>
        </div>
        <button className="mm-x" aria-label="Close" onClick={onClose}><i data-lucide="x"></i></button>
      </div>
      <p className="mm-blurb">{spoke.blurb}</p>

      {projects.length > 0 &&
      <>
          <div className="mm-sublabel"><span></span><b>{projects.length > 1 ? 'Case studies' : 'Case study'}</b></div>
          {projects.map((p) =>
        <button key={p.id} className="mm-proj" onClick={() => onOpenProject(p)}>
              <div className="mm-proj-thumb">{p.image ? <img src={p.image} alt={p.title} /> : <i data-lucide={p.thumbIcon || 'folder'} style={{ width: 22, height: 22, color: 'var(--accent)' }}></i>}</div>
              <div className="mm-proj-body">
                <span className="mm-proj-tag">{p.tag}</span>
                <div className="mm-proj-title">{p.title}</div>
                <span className="mm-proj-link">View case study <span className="arw">→</span></span>
              </div>
            </button>
        )}
        </>
      }

      <div className="mm-sublabel"><span></span><b>Focus areas</b></div>
      <div>
        {spoke.expertise.map((name) => {
          const e = window.expertiseByName(name);
          return (
            <div key={name} className="mm-exp">
              <div className="eico"><i data-lucide={e.icon}></i></div>
              <div>
                <div className="mm-exp-h">{e.h}</div>
                {e.p && <div className="mm-exp-p">{e.p}</div>}
              </div>
            </div>);

        })}
      </div>
    </>);

}

function useViewportSize() {
  const get = () => ({
    w: typeof window !== 'undefined' ? window.innerWidth : 1200,
    h: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const [size, setSize] = React.useState(get);
  React.useEffect(() => {
    const on = () => setSize(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return size;
}

function MindMap({ layout, reveal, onAbout }) {
  const [active, setActive] = React.useState(null); // spoke id
  const [project, setProject] = React.useState(null);
  const { w: width, h: height } = useViewportSize();
  const pos = layoutPositions(layout);
  const spokes = window.SPOKES;
  const activeIdx = active ? spokes.findIndex((s) => s.id === active) : null;
  const activeSpoke = activeIdx != null && activeIdx >= 0 ? spokes[activeIdx] : null;

  const mode = !activeSpoke ? 'overview' : reveal === 'expand' ? 'expand' : 'panel';
  const drilling = mode === 'expand';
  const children = drilling ? spokeChildren(activeSpoke) : [];
  const dl = drilling ? drillLayout(children.length, width, height) : null;
  const narrowDrill = drilling && dl.narrow;

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [layout, reveal, active, project, width]);

  React.useEffect(() => {
    const onKey = (e) => {if (e.key === 'Escape') {setActive(null);}};
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // close active when layout / reveal changes to avoid stale geometry
  React.useEffect(() => {setActive(null);}, [layout, reveal]);

  const close = () => setActive(null);

  return (
    <div className="mm-stage" onClick={close}>
      <style>{MM_CSS}</style>

      {drilling ?
      <button className="mm-back" onClick={(e) => {e.stopPropagation();close();}}>
          <i data-lucide="arrow-left"></i> All areas
        </button> :

      <div className="mm-head">
          <div className="wm">{window.PROFILE.name}<i>.</i></div>
          <div className="ov">Product Designer · Portfolio</div>
        </div>
      }

      <Branches pos={pos} activeIdx={activeIdx != null && activeIdx >= 0 ? activeIdx : null} layout={layout}
      drill={drilling} drillOrigin={!narrowDrill && dl ? dl.origin : null} drillChildren={!narrowDrill && dl ? dl.children : null} />

      <CenterNode pos={pos} dim={mode === 'panel'} hidden={mode === 'expand'} onAbout={onAbout} />

      {!narrowDrill && spokes.map((s, i) => {
        const n = pos.nodes[i];
        let state = 'idle';
        if (mode !== 'overview') state = s.id === active ? 'active' : mode === 'expand' ? 'hidden' : 'dim';
        const style = mode === 'expand' && s.id === active ?
        { left: dl.parent.x + '%', top: dl.parent.y + '%' } :
        { left: n.x + '%', top: n.y + '%' };
        return (
          <SpokeNode key={s.id} spoke={s} state={state} style={style}
          onClick={() => setActive(active === s.id ? null : s.id)} />);

      })}

      {activeSpoke &&
      <div className={'mm-catcher' + (reveal === 'panel' ? ' scrim' : '')} onClick={close}></div>
      }

      {drilling && !narrowDrill && dl.blurb &&
      <div className="mm-drill-blurb"
      style={{ left: dl.blurb.x + '%', top: dl.blurb.y + '%' }}>
          <div className="lead">In this area</div>
          <p>{activeSpoke.blurb}</p>
        </div>
      }

      {drilling && !narrowDrill && children.length > 0 && children.map((c, i) =>
      <ChildNode key={c.key} child={c} onOpenProject={setProject}
      style={{ left: dl.children[i].x + '%', top: dl.children[i].y + '%' }} />
      )}

      {drilling && !narrowDrill && children.length === 0 &&
      <div className="mm-child" style={{ left: dl.children[0].x + '%', top: dl.children[0].y + '%' }}>
          <div className="mm-cempty">
            <i data-lucide="sparkles"></i>
            <div className="et">Work in progress</div>
            <p>New case studies in this area are on the way. Open <b>About me</b> for the full picture.</p>
          </div>
        </div>
      }

      {narrowDrill &&
      <div className="mm-drill-narrow" onClick={(e) => e.stopPropagation()}>
          <SpokeNode spoke={activeSpoke} state="active" staticFlow onClick={() => {}} />
          <div className="mm-drill-blurb narrow static">
            <div className="lead">In this area</div>
            <p>{activeSpoke.blurb}</p>
          </div>
          {children.length > 0 ?
        children.map((c) =>
        <React.Fragment key={c.key}>
                <span className="mm-drill-connector" aria-hidden="true"></span>
                <ChildNode child={c} onOpenProject={setProject} staticFlow />
              </React.Fragment>
        ) :

        <>
              <span className="mm-drill-connector" aria-hidden="true"></span>
              <div className="mm-cempty static">
                <i data-lucide="sparkles"></i>
                <div className="et">Work in progress</div>
                <p>New case studies in this area are on the way. Open <b>About me</b> for the full picture.</p>
              </div>
            </>
        }
        </div>
      }

      {mode === 'panel' &&
      <div className="mm-side" onClick={(e) => e.stopPropagation()}>
          <ExpansionContent spoke={activeSpoke} onOpenProject={setProject} onClose={close} />
        </div>
      }

      {window.ProjectModal && <window.ProjectModal p={project} onClose={() => setProject(null)} />}
    </div>);

}

Object.assign(window, { MindMap });
