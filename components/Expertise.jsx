/* Expertise.jsx — areas of expertise grid */
function ExpertiseCard({ x }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...expStyles.card, boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)', transform: hover ? 'translateY(-3px)' : 'none', borderColor: hover ? 'var(--color-mint)' : 'var(--color-silver)' }}>
      <div style={expStyles.iconWrap}>
        <i data-lucide={x.icon} style={{ width: 22, height: 22, color: 'var(--color-teal)' }}></i>
      </div>
      <h3 style={expStyles.h}>{x.h}</h3>
      <p style={expStyles.p}>{x.p}</p>
    </div>
  );
}

function Expertise() {
  return (
    <section style={expStyles.section}>
      <div style={expStyles.inner}>
        <div style={expStyles.overline}>My Areas of Expertise</div>
        <h2 style={expStyles.heading}>Where I do my best work</h2>
        <div style={expStyles.bar}></div>
        <div style={expStyles.grid}>
          {window.EXPERTISE.map((x) => <ExpertiseCard key={x.h} x={x} />)}
        </div>
      </div>
    </section>
  );
}

const expStyles = {
  section: { background: '#fff', padding: '5rem 2rem' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  overline: { fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-teal)', fontWeight: 500 },
  heading: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.8rem,3.5vw,2.25rem)', color: 'var(--color-navy)', margin: '14px 0 0' },
  bar: { width: 40, height: 3, background: 'var(--color-teal)', margin: '16px 0 40px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 },
  card: { background: '#fff', border: '1px solid var(--color-silver)', borderRadius: 10, padding: '26px 26px 28px', transition: 'all 250ms ease' },
  iconWrap: { width: 46, height: 46, borderRadius: 10, background: 'var(--color-pale-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  h: { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 18, color: 'var(--color-navy)', margin: '0 0 10px' },
  p: { fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-graphite)', margin: 0 },
};

window.Expertise = Expertise;
