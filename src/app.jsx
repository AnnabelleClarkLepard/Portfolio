/* app.jsx — production entry point for the Mind Map Portfolio.
   Renders the mind map at its shipped defaults (radial layout, branch-out
   reveal, teal accent — matching colors_and_type.css) with no in-page
   tweaks UI. */

function App() {
  const [aboutOpen, setAboutOpen] = React.useState(false);

  return (
    <React.Fragment>
      <MindMap layout="radial" reveal="expand" onAbout={() => setAboutOpen(true)} />
      <AboutPanel open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
