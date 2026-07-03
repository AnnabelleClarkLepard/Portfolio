/* Contact.jsx — navy contact section + footer */
function Contact() {
  const P = window.PROFILE;
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [focus, setFocus] = React.useState(null);
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };
  const fieldStyle = (k) => ({ ...contactStyles.input, ...(focus === k ? contactStyles.inputFocus : {}) });

  return (
    <section style={contactStyles.section}>
      <div style={contactStyles.inner} className="contact-grid">
        <div style={contactStyles.left}>
          <div style={contactStyles.overline}>Contact</div>
          <h2 style={contactStyles.heading}>Let's connect.</h2>
          <p style={contactStyles.sub}>
            Have a complex system that needs clarity — financial, operational, or accessible?
            I read every message and reply within a couple of days.
          </p>
          <div style={contactStyles.channels}>
            <a href={`mailto:${P.email}`} style={contactStyles.channel}>
              <span style={contactStyles.cIconWrap}><i data-lucide="mail" style={contactStyles.cIcon}></i></span>
              {P.email}
            </a>
            <a href={P.linkedinUrl} target="_blank" rel="noopener noreferrer" style={contactStyles.channel}>
              <span style={contactStyles.cIconWrap}><i data-lucide="briefcase" style={contactStyles.cIcon}></i></span>
              {P.linkedin}
            </a>
            <div style={{ ...contactStyles.channel, cursor: 'default' }}>
              <span style={contactStyles.cIconWrap}><i data-lucide="map-pin" style={contactStyles.cIcon}></i></span>
              {P.location}
            </div>
          </div>
        </div>
        <div style={contactStyles.right}>
          {sent ? (
            <div style={contactStyles.success}>
              <i data-lucide="check-circle" style={{ width: 36, height: 36, color: 'var(--color-mint)' }}></i>
              <div style={contactStyles.successT}>Message sent</div>
              <p style={contactStyles.successP}>Thanks, {form.name || 'there'} — I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={contactStyles.form}>
              <div>
                <label style={contactStyles.label}>Name</label>
                <input style={fieldStyle('name')} value={form.name} onChange={set('name')}
                       onFocus={() => setFocus('name')} onBlur={() => setFocus(null)}
                       placeholder="Your name" required />
              </div>
              <div>
                <label style={contactStyles.label}>Email</label>
                <input style={fieldStyle('email')} type="email" value={form.email} onChange={set('email')}
                       onFocus={() => setFocus('email')} onBlur={() => setFocus(null)}
                       placeholder="you@company.com" required />
              </div>
              <div>
                <label style={contactStyles.label}>Message</label>
                <textarea style={{ ...fieldStyle('message'), minHeight: 104, resize: 'vertical' }}
                          value={form.message} onChange={set('message')}
                          onFocus={() => setFocus('message')} onBlur={() => setFocus(null)}
                          placeholder="Tell me about your project…" required />
              </div>
              <button type="submit" style={contactStyles.submit}>Send message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  const P = window.PROFILE;
  return (
    <footer style={footerStyles.wrap}>
      <div style={footerStyles.inner}>
        <span style={footerStyles.logo} onClick={() => onNav('top')}>
          Annabelle Clark-Lepard<span style={{ color: 'var(--color-teal)' }}>.</span>
        </span>
        <div style={footerStyles.links}>
          <a style={footerStyles.link} onClick={() => onNav('work')}>Work</a>
          <a style={footerStyles.link} onClick={() => onNav('expertise')}>Expertise</a>
          <a style={footerStyles.link} onClick={() => onNav('about')}>About</a>
          <a style={footerStyles.link} onClick={() => onNav('contact')}>Contact</a>
        </div>
        <span style={footerStyles.copy}>Designed &amp; built by {P.name}. © 2026.</span>
      </div>
    </footer>
  );
}

const contactStyles = {
  section: { background: 'var(--color-navy)', padding: '5rem 2rem' },
  inner: { maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' },
  left: {},
  overline: { fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-mint)', fontWeight: 500 },
  heading: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.9rem,3.5vw,2.5rem)', color: '#fff', margin: '14px 0 0' },
  sub: { fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17, lineHeight: 1.8, color: 'var(--color-mist)', margin: '18px 0 0', maxWidth: '44ch' },
  channels: { display: 'flex', flexDirection: 'column', gap: 14, marginTop: 36 },
  channel: { display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-body)', fontSize: 15, color: '#fff', cursor: 'pointer', textDecoration: 'none' },
  cIconWrap: { width: 40, height: 40, borderRadius: 10, background: 'rgba(125,191,170,0.14)', border: '1px solid rgba(125,191,170,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  cIcon: { width: 18, height: 18, color: 'var(--color-mint)' },
  right: {},
  form: { display: 'flex', flexDirection: 'column', gap: 18, background: 'var(--color-slate)', border: '1px solid var(--color-mid-blue)', borderRadius: 16, padding: '30px 30px 32px' },
  label: { display: 'block', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-mist)', letterSpacing: '0.04em', marginBottom: 7, textTransform: 'uppercase' },
  input: { width: '100%', boxSizing: 'border-box', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--color-mid-blue)', color: '#fff', borderRadius: 8, padding: '13px 15px', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', transition: 'all 200ms ease' },
  inputFocus: { borderColor: 'var(--color-mint)', boxShadow: '0 0 0 3px rgba(125,191,170,0.2)', background: 'rgba(255,255,255,0.10)' },
  submit: { background: 'var(--color-teal)', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, border: 'none', borderRadius: 8, padding: '15px 24px', cursor: 'pointer', marginTop: 4, transition: 'background 250ms ease' },
  success: { background: 'var(--color-slate)', border: '1px solid var(--color-mid-blue)', borderRadius: 16, padding: '48px 32px', textAlign: 'center' },
  successT: { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 22, color: '#fff', marginTop: 14 },
  successP: { fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, color: 'var(--color-mist)', margin: '8px 0 0' },
};

const footerStyles = {
  wrap: { background: 'var(--color-navy)', padding: '0 2rem 2.5rem' },
  inner: { maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', borderTop: '1px solid var(--color-mid-blue)', paddingTop: 28 },
  logo: { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, color: '#fff', cursor: 'pointer' },
  links: { display: 'flex', gap: 22, marginLeft: 'auto' },
  link: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-mist)', cursor: 'pointer', textDecoration: 'none' },
  copy: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-mist)', width: '100%', marginTop: 4 },
};

Object.assign(window, { Contact, Footer });
