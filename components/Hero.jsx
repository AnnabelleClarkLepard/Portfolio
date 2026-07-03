/* Hero.jsx — three hero variations, switchable via Tweaks */
function SpecialtyChips({ items, onDark }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
      {items.map((s) =>
      <span key={s} style={{
        fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
        color: onDark ? 'var(--color-mist)' : 'var(--color-slate)',
        background: onDark ? 'rgba(168,196,212,0.10)' : '#fff',
        border: onDark ? '1px solid rgba(168,196,212,0.30)' : '1px solid var(--color-silver)',
        borderRadius: 999, padding: '8px 16px', whiteSpace: 'nowrap'
      }}>{s}</span>
      )}
    </div>);

}

function HeroActions({ onNav }) {
  const [h1, setH1] = React.useState(false);
  const [h2, setH2] = React.useState(false);
  return (
    <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
      <button
        onMouseEnter={() => setH1(true)} onMouseLeave={() => setH1(false)}
        onClick={() => onNav('work')}
        style={{ background: h1 ? 'var(--accent-hover)' : 'var(--color-teal)', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, border: 'none', borderRadius: 8, padding: '14px 30px', cursor: 'pointer', transition: 'background 250ms ease' }}>
        View my work
      </button>
      <button
        onMouseEnter={() => setH2(true)} onMouseLeave={() => setH2(false)}
        onClick={() => onNav('contact')}
        style={{ background: h2 ? '#EAECEF' : '#fff', color: 'var(--color-slate)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, border: '1.5px solid var(--color-silver)', borderRadius: 8, padding: '14px 30px', cursor: 'pointer', transition: 'all 250ms ease' }}>
        Get in touch
      </button>
    </div>);

}

function Hero({ onNav, variant }) {
  const P = window.PROFILE;
  const overline = `${P.role} · ${P.location}`;

  if (variant === 'split') {
    return (
      <section style={{ background: 'var(--color-pale-blue)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hero-split-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={heroStyles.rule}></div>
              <div style={heroStyles.overline}>{overline}</div>
              <h1 style={{ ...heroStyles.headline, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', maxWidth: '15ch' }}>{P.headline}</h1>
              <p style={{ ...heroStyles.sub, maxWidth: '46ch' }}>{P.subhead}</p>
              <HeroActions onNav={onNav} />
            </div>
            <div style={heroStyles.portraitWrap}>
              <div style={heroStyles.portraitAccent}></div>
              <img src="assets/headshot.png" alt={P.name} style={heroStyles.portrait} />
            </div>
          </div>
          <SpecialtyChips items={P.specialties} />
        </div>
      </section>);

  }

  if (variant === 'editorial') {
    return (
      <section style={{ background: '#fff', padding: '6rem 2rem 5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ ...heroStyles.overline, color: 'var(--color-teal)' }}>{overline}</div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(2.6rem, 7vw, 5rem)', lineHeight: 1.04, letterSpacing: '-0.03em', color: 'var(--color-navy)', margin: '18px 0 0', maxWidth: '16ch' }}>
            Designing clarity into <span style={{ color: 'var(--color-teal)' }}>complex systems.</span>
          </h1>
          <div style={{ width: 56, height: 3, background: 'var(--color-teal)', margin: '32px 0' }}></div>
          <div className="hero-edit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }}>
            <p style={{ ...heroStyles.sub, marginTop: 0, fontSize: 19, maxWidth: '44ch' }}>{P.subhead}</p>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {P.specialties.map((s, i) =>
                <div key={s} style={{ display: 'flex', alignItems: 'baseline', gap: 14, borderTop: '1px solid var(--color-silver)', paddingTop: 12 }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: 'var(--color-mist)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-slate)', fontWeight: 500 }}>{s}</span>
                  </div>
                )}
              </div>
              <HeroActions onNav={onNav} />
            </div>
          </div>
        </div>
      </section>);

  }

  // classic (default)
  return (
    <section style={{ ...heroStyles.wrap, height: "1051px" }}>
      <div style={heroStyles.inner}>
        <div style={heroStyles.rule}></div>
        <div style={heroStyles.overline}>{overline}</div>
        <h1 style={heroStyles.headline}>{P.headline}</h1>
        <p style={heroStyles.sub}>{P.subhead}</p>
        <SpecialtyChips items={P.specialties} />
        <HeroActions onNav={onNav} />
      </div>
    </section>);

}

const heroStyles = {
  wrap: { background: 'var(--color-pale-blue)', display: 'flex', alignItems: 'center', padding: '5.5rem 2rem 4.5rem' },
  inner: { maxWidth: 1200, margin: '0 auto', width: '100%' },
  rule: { width: 56, height: 1, background: 'var(--color-mist)', marginBottom: 24 },
  overline: { fontFamily: 'var(--font-body)', fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-teal)', fontWeight: 500, marginBottom: 20 },
  headline: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--color-navy)', margin: 0, maxWidth: '16ch' },
  sub: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 18, lineHeight: 1.8, color: 'var(--color-graphite)', maxWidth: '52ch', margin: '24px 0 0' },
  portraitWrap: { position: 'relative', justifySelf: 'center' },
  portraitAccent: { position: 'absolute', inset: 0, transform: 'translate(18px, 18px)', borderRadius: 16, border: '2px solid var(--color-teal)' },
  portrait: { position: 'relative', width: 'min(340px, 70vw)', aspectRatio: '1', objectFit: 'cover', borderRadius: 16, boxShadow: 'var(--shadow-lg)', display: 'block' }
};

window.Hero = Hero;