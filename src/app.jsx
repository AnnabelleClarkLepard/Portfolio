/* app.jsx — production entry point for the Mind Map Portfolio.
   Renders the mind map at its shipped defaults (radial layout, branch-out
   reveal, teal accent — matching colors_and_type.css) with no in-page
   tweaks UI. */

function PersonalProjectsSection() {
  const projects = [
    {
      name: 'Volleyball Lineup Planner',
      summary: 'A local-first lineup builder for coaches and captains to create teams, assign players, manage availability, and test rotations quickly.',
      stack: 'React · TypeScript · Vite',
      demo: 'https://annabelleclarklepard.github.io/Volleyball/',
      repo: 'https://github.com/AnnabelleClarkLepard/Volleyball',
    },
    {
      name: 'UX Design Process',
      summary: 'Portfolio exploration focused on structuring complex workflows into simple, high-confidence user experiences for operational tools.',
      stack: 'UX strategy · Prototyping · Design systems',
      demo: '#',
      repo: '#',
    },
    {
      name: 'Interactive Product Thinking',
      summary: 'Work centered on translating ambiguous operational requirements into clear user flows, accessible interfaces, and trusted product decisions.',
      stack: 'Product design · Research · AI workflows',
      demo: '#',
      repo: '#',
    },
  ];

  return (
    <section id="personal-projects" style={{ background: '#fff', padding: '5rem 2rem 6rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-teal)', fontWeight: 500 }}>
          Personal Projects
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--color-navy)', margin: '14px 0 0', letterSpacing: '-0.02em' }}>
          Product ideas shaped for clarity, speed, and trust
        </h2>
        <div style={{ width: 48, height: 3, background: 'var(--color-teal)', margin: '18px 0 32px' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {projects.map((project) => (
            <article key={project.name} style={{ background: 'var(--color-cloud)', border: '1px solid var(--color-silver)', borderRadius: 16, padding: 20, boxShadow: 'var(--shadow-xs)' }}>
              <div style={{ display: 'inline-block', background: 'var(--color-pale-green)', color: 'var(--color-teal)', borderRadius: 999, padding: '6px 10px', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {project.stack}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 24, color: 'var(--color-navy)', margin: '18px 0 10px', letterSpacing: '-0.01em' }}>
                {project.name}
              </h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--color-graphite)' }}>
                {project.summary}
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 22 }}>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'var(--color-teal)', color: '#fff', textDecoration: 'none', padding: '10px 16px', borderRadius: 8, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14 }}
                  >
                    Live demo
                  </a>
                )}
                {project.repo !== '#' && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: '#fff', color: 'var(--color-slate)', border: '1px solid var(--color-silver)', textDecoration: 'none', padding: '10px 16px', borderRadius: 8, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14 }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [aboutOpen, setAboutOpen] = React.useState(false);

  return (
    <React.Fragment>
      <MindMap layout="radial" reveal="expand" onAbout={() => setAboutOpen(true)} />
      <PersonalProjectsSection />
      <AboutPanel open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
