/* Nav.jsx — sticky top navigation */
function Nav({ active, onNav }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const links = [
    { id: 'top', label: 'Welcome' },
    { id: 'work', label: 'Work' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'about', label: 'About' },
  ];
  const go = (id) => { setOpen(false); onNav(id); };

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{ ...navStyles.bar, boxShadow: scrolled ? '0 1px 0 var(--color-silver), 0 6px 20px rgba(27,43,59,0.06)' : '0 1px 0 var(--color-silver)' }}>
      <div style={navStyles.inner}>
        <span style={navStyles.logo} onClick={() => go('top')}>
          Annabelle Clark-Lepard<span style={{ color: 'var(--color-teal)' }}>.</span>
        </span>
        <nav style={navStyles.links} className="nav-links-desktop">
          {links.map((l) => (
            <a key={l.id}
               onClick={() => go(l.id)}
               onMouseEnter={(e) => { if (active !== l.id) e.currentTarget.style.color = 'var(--color-teal)'; }}
               onMouseLeave={(e) => { if (active !== l.id) e.currentTarget.style.color = 'var(--color-graphite)'; }}
               style={{ ...navStyles.link, ...(active === l.id ? navStyles.linkActive : {}) }}>
              {l.label}
            </a>
          ))}
          <button style={navStyles.cta} onClick={() => go('contact')}>Let's connect</button>
        </nav>
        <button style={navStyles.burger} className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <i data-lucide={open ? 'x' : 'menu'} style={{ width: 22, height: 22 }}></i>
        </button>
      </div>
      {open && (
        <div style={navStyles.mobile}>
          {links.map((l) => (
            <a key={l.id} onClick={() => go(l.id)}
               style={{ ...navStyles.mLink, ...(active === l.id ? { color: 'var(--color-teal)' } : {}) }}>
              {l.label}
            </a>
          ))}
          <button style={{ ...navStyles.cta, marginTop: 8 }} onClick={() => go('contact')}>Let's connect</button>
        </div>
      )}
    </header>
  );
}

const navStyles = {
  bar: { position: 'sticky', top: 0, zIndex: 50, background: '#fff', transition: 'box-shadow 250ms ease' },
  inner: { maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', gap: 24, padding: '0 2rem', boxSizing: 'border-box' },
  logo: { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 18, color: 'var(--color-navy)', cursor: 'pointer', letterSpacing: '-0.01em', whiteSpace: 'nowrap' },
  links: { display: 'flex', alignItems: 'center', gap: 30, marginLeft: 'auto' },
  link: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 13, color: 'var(--color-graphite)', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', transition: 'color 200ms ease' },
  linkActive: { color: 'var(--color-teal)', fontWeight: 500 },
  cta: { background: 'var(--color-teal)', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 13, border: 'none', borderRadius: 8, padding: '9px 18px', cursor: 'pointer', transition: 'background 250ms ease', whiteSpace: 'nowrap' },
  burger: { marginLeft: 'auto', display: 'none', background: 'none', border: 'none', color: 'var(--color-navy)', cursor: 'pointer', padding: 6 },
  mobile: { display: 'flex', flexDirection: 'column', padding: '8px 2rem 16px', gap: 4, borderTop: '1px solid var(--color-cloud)' },
  mLink: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-graphite)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 0', cursor: 'pointer' },
};

window.Nav = Nav;
