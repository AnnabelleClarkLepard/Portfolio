/* Metrics.jsx — impact metrics strip */
function Metrics() {
  return (
    <section style={{ ...metricStyles.section, background: "rgb(242, 245, 247)" }}>
      <div style={metricStyles.inner} className="metrics-grid">
        {window.METRICS.map((m, i) =>
        <div key={m.l} style={{ ...metricStyles.item, borderLeft: i === 0 ? 'none' : '1px solid var(--color-silver)' }}>
            <div style={metricStyles.n}>{m.n}</div>
            <div style={metricStyles.l}>{m.l}</div>
          </div>
        )}
      </div>
    </section>);

}

const metricStyles = {
  section: { background: '#fff', padding: '0 2rem' },
  inner: { maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderRadius: 16, border: '1px solid var(--color-silver)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden', transform: 'translateY(-40px)', background: '#fff' },
  item: { padding: '30px 32px' },
  n: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.7rem, 3vw, 2.25rem)', color: 'var(--color-teal)', letterSpacing: '-0.02em' },
  l: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-graphite)', marginTop: 6, lineHeight: 1.5 }
};

window.Metrics = Metrics;