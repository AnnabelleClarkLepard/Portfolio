/* Work.jsx — project grid + rich case-study modal */
const MODAL_RESPONSIVE_CSS = `
  @media (max-width: 700px) {
    .modal-pad { padding-left: 22px !important; padding-right: 22px !important; }
    .modal-hero { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
    .modal-hero-thumb { width: 84px !important; height: 84px !important; }
    .two-col { grid-template-columns: 1fr !important; }
  }
`;

function ProjectCard({ p, onOpen, index }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(p)}
      style={{
        ...workStyles.card,
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      }}>
      <div style={{ ...workStyles.cardImg, background: `linear-gradient(150deg, var(--color-pale-blue), var(--color-pale-green))` }}>
        <span style={workStyles.cardNum}>{String(index + 1).padStart(2, '0')}</span>
        <span style={{ ...workStyles.badge, position: 'absolute', top: 16, left: 16 }}>{p.tag}</span>
      </div>
      <div style={workStyles.cardBody}>
        <h3 style={workStyles.cardTitle}>{p.title}</h3>
        <p style={workStyles.cardBlurb}>{p.blurb}</p>
        <span style={{ ...workStyles.cardLink, color: hover ? 'var(--color-teal)' : 'var(--color-sky)' }}>
          Read case study <span style={{ transition: 'transform 250ms ease', display: 'inline-block', transform: hover ? 'translateX(4px)' : 'none' }}>→</span>
        </span>
      </div>
    </div>
  );
}

function Pillars({ p }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'var(--color-silver)', border: '1px solid var(--color-silver)', borderRadius: 10, overflow: 'hidden' }}>
      {[['Role', p.role], ['Tools & Context', p.context]].map(([k, v]) => (
        <div key={k} style={{ background: '#fff', padding: '16px 18px' }}>
          <div style={modalStyles.metaLabel}>{k}</div>
          <div style={modalStyles.metaVal}>{v}</div>
        </div>
      ))}
    </div>
  );
}

function Block({ label, children }) {
  return (
    <div style={{ marginTop: 32 }}>
      <div style={modalStyles.blockHead}>
        <span style={modalStyles.blockBar}></span>
        <span style={modalStyles.blockLabel}>{label}</span>
      </div>
      {children}
    </div>
  );
}

function CheckList({ items, accent }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <i data-lucide="check" style={{ width: 18, height: 18, color: accent || 'var(--color-teal)', flexShrink: 0, marginTop: 3 }}></i>
          <span style={modalStyles.liText}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectModal({ p, onClose }) {
  React.useEffect(() => {
    if (!p) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [p]);
  if (!p) return null;
  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <style>{MODAL_RESPONSIVE_CSS}</style>
      <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={modalStyles.close} onClick={onClose} aria-label="Close">
          <i data-lucide="x" style={{ width: 20, height: 20 }}></i>
        </button>

        <div className="modal-pad modal-hero" style={{ ...modalStyles.hero, background: `linear-gradient(150deg, var(--color-navy), var(--color-slate))`, display: 'flex', alignItems: 'center', gap: 32, justifyContent: 'space-between' }}>
          <div style={{ minWidth: 0 }}>
            <span style={{ ...workStyles.badge, background: 'rgba(125,191,170,0.18)', color: 'var(--color-mint)', border: '1px solid rgba(125,191,170,0.3)' }}>{p.tag}</span>
            <h2 style={modalStyles.title}>{p.title}</h2>
            <p style={modalStyles.discipline}>{p.discipline}</p>
          </div>
          {p.image && (
            <div className="modal-hero-thumb" style={modalStyles.heroThumb}>
              <img src={p.image} alt="" style={modalStyles.heroThumbImg} />
            </div>
          )}
        </div>

        <div style={modalStyles.body} className="modal-pad">
          {p.image && (
            <figure style={modalStyles.figure}>
              <div style={modalStyles.figFrame}>
                <img src={p.image} alt={p.title} style={modalStyles.figImg} />
              </div>
              <figcaption style={modalStyles.figCap}>{p.imageCaption}</figcaption>
            </figure>
          )}
          <Pillars p={p} />

          <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <span style={modalStyles.constraintLabel}>Constraints</span>
            {p.constraints.map((c) => (
              <span key={c} style={modalStyles.constraint}>{c}</span>
            ))}
          </div>

          <Block label="The Solution">
            <p style={modalStyles.para}>{p.solution}</p>
            {p.solutionPoints && (
              <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.solutionPoints.map((s, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <i data-lucide="arrow-right" style={{ width: 16, height: 16, color: 'var(--color-sky)', flexShrink: 0, marginTop: 4 }}></i>
                    <span style={modalStyles.liText}>{s}</span>
                  </li>
                ))}
              </ul>
            )}
          </Block>

          <Block label="The Core Problems">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {p.problems.map((pr, i) => (
                <div key={i} style={modalStyles.problemCard}>
                  <div style={modalStyles.problemWho}>{pr.who}{pr.sub ? <span style={modalStyles.problemSub}> · {pr.sub}</span> : null}</div>
                  <div style={modalStyles.problemText}>{pr.t}</div>
                </div>
              ))}
            </div>
          </Block>

          <div style={modalStyles.twoCol} className="two-col">
            <Block label="What Success Looks Like">
              <CheckList items={p.success} accent="var(--color-sage)" />
            </Block>
            <Block label="The Impact">
              <CheckList items={p.impact} accent="var(--color-teal)" />
            </Block>
          </div>

          <Block label="The Process">
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {p.process.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={modalStyles.stepNum}>{i + 1}</span>
                  <span style={{ ...modalStyles.liText, paddingTop: 3 }}>{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block label="Reflection">
            <div className="two-col" style={modalStyles.reflectGrid}>
              <div style={modalStyles.reflectCard}>
                <div style={modalStyles.reflectLabel}>Biggest challenge</div>
                <p style={modalStyles.reflectText}>{p.challenge}</p>
              </div>
              <div style={{ ...modalStyles.reflectCard, background: 'var(--color-pale-green)', border: '1px solid var(--color-mint)' }}>
                <div style={{ ...modalStyles.reflectLabel, color: 'var(--color-teal)' }}>Key takeaway</div>
                <p style={modalStyles.reflectText}>{p.takeaway}</p>
              </div>
            </div>
          </Block>
        </div>
      </div>
    </div>
  );
}

function Work({ onOpen }) {
  return (
    <section style={workStyles.section}>
      <div style={workStyles.inner}>
        <div style={workStyles.overline}>Selected Work</div>
        <h2 style={workStyles.heading}>Three systems, built for trust at scale</h2>
        <div style={workStyles.bar}></div>
        <div style={workStyles.grid}>
          {window.PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} index={i} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  );
}

const workStyles = {
  section: { background: 'var(--color-cloud)', padding: '2rem 2rem 5rem' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  overline: { fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-teal)', fontWeight: 500 },
  heading: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.8rem,3.5vw,2.25rem)', color: 'var(--color-navy)', margin: '14px 0 0' },
  bar: { width: 40, height: 3, background: 'var(--color-teal)', margin: '16px 0 40px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 },
  card: { background: '#fff', border: '1px solid var(--color-silver)', borderRadius: 10, overflow: 'hidden', cursor: 'pointer', transition: 'all 250ms ease' },
  cardImg: { position: 'relative', height: 168, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 16 },
  cardNum: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 56, color: 'rgba(46,64,87,0.16)', lineHeight: 0.8 },
  cardBody: { padding: '20px 20px 22px' },
  badge: { display: 'inline-block', whiteSpace: 'nowrap', background: 'var(--color-pale-green)', color: 'var(--color-teal)', fontWeight: 500, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '5px 11px', borderRadius: 4, fontFamily: 'var(--font-body)' },
  cardTitle: { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 19, lineHeight: 1.3, color: 'var(--color-charcoal)', margin: '0 0 10px' },
  cardBlurb: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-graphite)', lineHeight: 1.6, margin: '0 0 16px' },
  cardLink: { fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, transition: 'color 250ms ease' },
};

const modalStyles = {
  overlay: { position: 'fixed', inset: 0, background: 'rgba(26,31,36,0.55)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', zIndex: 100, overflowY: 'auto' },
  modal: { position: 'relative', background: '#fff', borderRadius: 16, maxWidth: 760, width: '100%', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', margin: 'auto' },
  close: { position: 'absolute', top: 18, right: 18, background: 'rgba(255,255,255,0.92)', border: 'none', borderRadius: 999, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-navy)', zIndex: 2, boxShadow: 'var(--shadow-sm)' },
  hero: { padding: '40px 40px 36px' },
  heroThumb: { flexShrink: 0, width: 120, height: 120, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.18)', boxShadow: 'var(--shadow-lg)', background: '#fff' },
  heroThumbImg: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' },
  title: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2rem)', lineHeight: 1.2, color: '#fff', margin: '16px 0 0', letterSpacing: '-0.01em', maxWidth: '20ch' },
  discipline: { fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: 'var(--color-mist)', margin: '14px 0 0', maxWidth: '60ch' },
  body: { padding: '36px 40px 44px' },
  figure: { margin: '0 0 32px' },
  figFrame: { background: 'var(--color-pale-blue)', border: '1px solid var(--color-silver)', borderRadius: 12, padding: 18, display: 'flex', justifyContent: 'center' },
  figImg: { maxWidth: '100%', maxHeight: 460, objectFit: 'contain', borderRadius: 6, display: 'block' },
  figCap: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-stone-aa)', lineHeight: 1.6, margin: '12px 2px 0', textAlign: 'center', maxWidth: '64ch', marginLeft: 'auto', marginRight: 'auto' },
  metaLabel: { fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-stone-aa)', marginBottom: 5 },
  metaVal: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-charcoal)', fontWeight: 500, lineHeight: 1.5 },
  constraintLabel: { fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-stone-aa)', alignSelf: 'center', marginRight: 4 },
  constraint: { fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--color-slate)', background: 'var(--color-pale-blue)', borderRadius: 4, padding: '5px 11px', whiteSpace: 'nowrap' },
  blockHead: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 },
  blockBar: { width: 24, height: 3, background: 'var(--color-teal)', borderRadius: 2 },
  blockLabel: { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-navy)', whiteSpace: 'nowrap' },
  para: { fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.75, color: 'var(--color-graphite)', margin: 0, maxWidth: '64ch' },
  liText: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--color-graphite)' },
  twoCol: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 },
  problemCard: { background: 'var(--color-cloud)', border: '1px solid var(--color-silver)', borderRadius: 10, padding: '16px 18px' },
  problemWho: { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'var(--color-navy)', marginBottom: 8 },
  problemSub: { fontWeight: 400, fontSize: 12.5, color: 'var(--color-stone-aa)' },
  problemText: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--color-graphite)' },
  stepNum: { flexShrink: 0, width: 28, height: 28, borderRadius: 999, background: 'var(--color-pale-blue)', color: 'var(--color-teal)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  reflectGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  reflectCard: { background: 'var(--color-cloud)', border: '1px solid var(--color-silver)', borderRadius: 12, padding: '20px 22px' },
  reflectLabel: { fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-stone-aa)', marginBottom: 10, fontWeight: 500 },
  reflectText: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-graphite)', margin: 0 },
};

Object.assign(window, { Work, ProjectCard, ProjectModal });
