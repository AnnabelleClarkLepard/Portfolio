/* AboutPanel.jsx — full "About me" overlay opened from the center photo.
   Bio · Expertise (6) · Skills · Career timeline · Contact. */

const AB_CSS = `
  .ab-overlay{position:fixed;inset:0;z-index:120;background:rgba(26,31,36,.55);
    display:flex;justify-content:center;padding:40px 24px;overflow-y:auto;
    font-family:var(--font-body);animation:ab-fade .25s ease both;}
  @keyframes ab-fade{from{opacity:0;}to{opacity:1;}}
  .ab-sheet{position:relative;background:#fff;border-radius:18px;max-width:920px;width:100%;
    margin:auto;box-shadow:var(--shadow-xl);overflow:hidden;
    animation:ab-rise .3s cubic-bezier(.3,.7,.4,1) both;}
  @keyframes ab-rise{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}
  .ab-x{position:absolute;top:20px;right:20px;z-index:3;appearance:none;border:none;
    background:rgba(255,255,255,.92);width:40px;height:40px;border-radius:999px;cursor:pointer;
    display:flex;align-items:center;justify-content:center;color:var(--color-navy);
    box-shadow:var(--shadow-sm);transition:background .2s ease;}
  .ab-x:hover{background:var(--color-cloud);}
  .ab-x svg{width:20px;height:20px;}

  .ab-hero{display:flex;gap:28px;align-items:center;padding:44px 44px 36px;
    background:var(--color-pale-blue);border-bottom:1px solid var(--color-silver);}
  .ab-hero img{width:132px;height:132px;border-radius:16px;object-fit:cover;flex-shrink:0;
    box-shadow:var(--shadow-md);}
  .ab-hero .ov{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);
    font-weight:600;}
  .ab-hero h2{margin:8px 0 0;font-family:var(--font-heading);font-weight:700;font-size:28px;
    color:var(--color-navy);letter-spacing:-.01em;}
  .ab-hero .role{font-size:15px;color:var(--color-slate);margin-top:4px;}
  .ab-spec{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;}
  .ab-spec span{background:#fff;border:1px solid var(--color-silver);border-radius:999px;
    padding:5px 12px;font-size:12px;color:var(--color-slate);font-weight:500;}

  .ab-body{padding:40px 44px 44px;}
  .ab-sec + .ab-sec{margin-top:40px;}
  .ab-lbl{display:flex;align-items:center;gap:12px;margin-bottom:18px;}
  .ab-lbl b{font-family:var(--font-heading);font-weight:700;font-size:20px;letter-spacing:-.01em;
    text-transform:none;color:var(--color-navy);}
  .ab-p{font-size:15.5px;line-height:1.8;color:var(--color-graphite);margin:0 0 16px;max-width:64ch;}

  .ab-exp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  .ab-exp{background:var(--color-cloud);border:1px solid var(--color-silver);border-radius:12px;
    padding:18px 20px;}
  .ab-exp .eico{width:38px;height:38px;border-radius:10px;background:#fff;
    border:1px solid var(--color-silver);color:var(--accent);display:flex;align-items:center;
    justify-content:center;margin-bottom:12px;}
  .ab-exp .eico svg{width:20px;height:20px;}
  .ab-exp h4{margin:0 0 6px;font-family:var(--font-heading);font-weight:600;font-size:15px;
    color:var(--color-navy);line-height:1.3;}
  .ab-exp p{margin:0;font-size:13px;line-height:1.6;color:var(--color-graphite);}

  .ab-skills{display:flex;flex-direction:column;gap:20px;}
  .ab-skill-h{font-family:var(--font-heading);font-weight:600;font-size:13.5px;color:var(--color-slate);
    margin-bottom:10px;}
  .ab-pills{display:flex;flex-wrap:wrap;gap:9px;}
  .ab-pill{background:var(--color-pale-blue);color:var(--color-slate);font-weight:500;font-size:13px;
    border-radius:999px;padding:7px 14px;}

  .ab-timeline{position:relative;padding-left:26px;}
  .ab-timeline::before{content:"";position:absolute;left:6px;top:6px;bottom:10px;width:2px;
    background:var(--color-silver);}
  .ab-company{margin-bottom:6px;}
  .ab-company h4{margin:0;font-family:var(--font-heading);font-weight:600;font-size:17px;
    color:var(--color-navy);}
  .ab-company .meta{font-size:12.5px;color:var(--color-stone-aa);margin-top:3px;}
  .ab-role{position:relative;padding:14px 0 4px 0;}
  .ab-role::before{content:"";position:absolute;left:-26px;top:19px;width:12px;height:12px;
    border-radius:999px;background:#fff;border:2px solid var(--color-silver);}
  .ab-role.current::before{background:var(--accent);border-color:var(--accent);
    box-shadow:0 0 0 4px var(--color-pale-green);}
  .ab-role h5{margin:0;font-family:var(--font-heading);font-weight:600;font-size:15px;
    color:var(--color-charcoal);}
  .ab-role .per{font-size:12.5px;color:var(--accent);font-weight:500;margin-top:3px;}
  .ab-role .sk{font-size:12.5px;color:var(--color-graphite);margin-top:5px;}

  .ab-contact{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  .ab-ch{display:flex;align-items:center;gap:14px;background:var(--color-cloud);
    border:1px solid var(--color-silver);border-radius:12px;padding:14px 16px;
    text-decoration:none;color:var(--color-navy);transition:border-color .2s ease,transform .2s ease;}
  .ab-ch:hover{border-color:var(--accent);transform:translateY(-2px);}
  .ab-ch .ciw{width:40px;height:40px;border-radius:10px;background:var(--color-pale-blue);
    color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .ab-ch .ciw svg{width:18px;height:18px;}
  .ab-ch .cl{display:block;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--color-stone-aa);
    font-weight:500;}
  .ab-ch .cv{display:block;font-size:13.5px;color:var(--color-navy);margin-top:6px;word-break:break-all;}

  @media (max-width:720px){
    .ab-hero{flex-direction:column;text-align:center;padding:36px 24px 28px;}
    .ab-spec{justify-content:center;}
    .ab-body{padding:30px 24px 36px;}
    .ab-exp-grid,.ab-contact{grid-template-columns:1fr;}
  }
`;

function AboutPanel({ open, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    if (window.lucide) window.lucide.createIcons();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);
  if (!open) return null;
  const P = window.PROFILE;
  return (
    <div className="ab-overlay" onClick={onClose}>
      <style>{AB_CSS}</style>
      <div className="ab-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="ab-x" aria-label="Close" onClick={onClose}><i data-lucide="x"></i></button>

        <div className="ab-hero">
          <img src="assets/headshot.png" alt={P.name} />
          <div>
            <div className="ov">About me</div>
            <h2>{P.name}</h2>
            <div className="role">{P.role} · {P.location}</div>
            <div className="ab-spec">
              {P.specialties.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>

        <div className="ab-body">
          <section className="ab-sec">
            <div className="ab-lbl"><b>How I work</b></div>
            <p className="ab-p">
              I'm a product design leader specialized in complex systems — financial workflows,
              payments, registration, and accessible platforms at scale. My favorite problems sit
              where legacy constraints, real data, and human needs collide, and my job is to make
              the result feel clear, accurate, and trustworthy.
            </p>
            <p className="ab-p">
              I work end to end and beyond the interface: research and flow mapping, design systems
              and accessibility, SQL and API alignment, prototyping in code, and the project
              management that keeps non-technical and engineering teams moving together. Increasingly,
              that means reshaping how design and delivery happen with AI — without losing rigor.
            </p>
          </section>

          <section className="ab-sec">
            <div className="ab-lbl"><b>Expertise</b></div>
            <div className="ab-exp-grid">
              {window.EXPERTISE.map((e) => (
                <div key={e.h} className="ab-exp">
                  <div className="eico"><i data-lucide={e.icon}></i></div>
                  <h4>{e.h}</h4>
                  <p>{e.p}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="ab-sec">
            <div className="ab-lbl"><b>Skills</b></div>
            <div className="ab-skills">
              {window.SKILLS.map((g) => (
                <div key={g.h}>
                  <div className="ab-skill-h">{g.h}</div>
                  <div className="ab-pills">
                    {g.items.map((s) => <span key={s} className="ab-pill">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="ab-sec">
            <div className="ab-lbl"><b>Experience</b></div>
            {window.CAREER.map((c) => (
              <div key={c.company} className="ab-timeline">
                <div className="ab-company">
                  <h4>{c.company}</h4>
                  <div className="meta">{c.location} · {c.span}</div>
                </div>
                {c.roles.map((r) => (
                  <div key={r.title} className={'ab-role' + (r.current ? ' current' : '')}>
                    <h5>{r.title}</h5>
                    <div className="per">{r.period}</div>
                    <div className="sk">{r.skills}</div>
                  </div>
                ))}
              </div>
            ))}
          </section>

          <section className="ab-sec">
            <div className="ab-lbl"><b>Get in touch</b></div>
            <div className="ab-contact">
              <a className="ab-ch" href={`mailto:${P.email}`}>
                <span className="ciw"><i data-lucide="mail"></i></span>
                <span><span className="cl">Email</span><span className="cv">{P.email}</span></span>
              </a>
              <a className="ab-ch" href={P.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <span className="ciw"><i data-lucide="linkedin"></i></span>
                <span><span className="cl">LinkedIn</span><span className="cv">{P.linkedin}</span></span>
              </a>
              <div className="ab-ch" style={{ cursor: 'default' }}>
                <span className="ciw"><i data-lucide="map-pin"></i></span>
                <span><span className="cl">Location</span><span className="cv">{P.location}</span></span>
              </div>
              <div className="ab-ch" style={{ cursor: 'default' }}>
                <span className="ciw"><i data-lucide="briefcase"></i></span>
                <span><span className="cl">Currently</span><span className="cv">Product Designer, AI Transformation Lead</span></span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AboutPanel });
