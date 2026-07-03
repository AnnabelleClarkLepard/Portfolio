/* About.jsx — bio with headshot + skills */
function About() {
  const P = window.PROFILE;
  return (
    <section style={aboutStyles.section}>
      <div style={aboutStyles.inner} className="about-grid">
        <div style={aboutStyles.portraitCol}>
          <div style={aboutStyles.portraitWrap}>
            <div style={aboutStyles.portraitAccent}></div>
            <img src="assets/headshot.png" alt={P.name} style={aboutStyles.portrait} />
          </div>
        </div>
        <div>
          <div style={aboutStyles.overline}>About</div>
          <h2 style={aboutStyles.heading}>A bit about how I work.</h2>
          <div style={aboutStyles.bar}></div>
          <p style={aboutStyles.p}>
            I'm a product design leader specialized in complex systems — financial workflows,
            payments, registration, and accessible platforms at scale. My favorite problems
            sit where legacy constraints, real data, and human needs collide, and my job is to
            make the result feel clear, accurate, and trustworthy.
          </p>
          <p style={aboutStyles.p}>
            I work end to end and beyond the interface: research and flow mapping, design systems
            and accessibility, SQL and API alignment, prototyping in code, and the project
            management that keeps non-technical and engineering teams moving together. Increasingly,
            that means reshaping how design and delivery happen with AI — without losing rigor.
          </p>
          <div style={aboutStyles.skills}>
            {window.SKILLS.map((g) => (
              <div key={g.h}>
                <div style={aboutStyles.skillH}>{g.h}</div>
                <div style={aboutStyles.pills}>
                  {g.items.map((s) => <span key={s} style={aboutStyles.pill}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutStyles = {
  section: { background: 'var(--color-pale-blue)', padding: '5rem 2rem' },
  inner: { maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(240px, 360px) 1fr', gap: 64, alignItems: 'start' },
  portraitCol: { position: 'sticky', top: 96 },
  portraitWrap: { position: 'relative', maxWidth: 360 },
  portraitAccent: { position: 'absolute', inset: 0, transform: 'translate(16px, 16px)', borderRadius: 16, border: '2px solid var(--color-teal)' },
  portrait: { position: 'relative', width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 16, boxShadow: 'var(--shadow-lg)', display: 'block' },
  overline: { fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-teal)', fontWeight: 500 },
  heading: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.8rem,3.5vw,2.25rem)', color: 'var(--color-navy)', margin: '14px 0 0', lineHeight: 1.2 },
  bar: { width: 40, height: 3, background: 'var(--color-teal)', margin: '16px 0 28px' },
  p: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: 'var(--color-graphite)', margin: '0 0 18px', maxWidth: '62ch' },
  skills: { display: 'flex', flexDirection: 'column', gap: 22, marginTop: 36, borderTop: '1px solid var(--color-silver)', paddingTop: 32 },
  skillH: { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'var(--color-slate)', marginBottom: 12, letterSpacing: '0.02em' },
  pills: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  pill: { background: '#fff', color: 'var(--color-slate)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13, border: '1px solid var(--color-silver)', borderRadius: 999, padding: '7px 15px', whiteSpace: 'nowrap' },
};

window.About = About;
