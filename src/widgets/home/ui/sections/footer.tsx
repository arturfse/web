
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot-wrap">
      <div className="foot-mark-wrap" aria-hidden="true">
        <div className="foot-mark-track">
          <span className="foot-mark">DEVELOPER.EXPERT</span>
          <span className="foot-mark-sep">✦</span>
          <span className="foot-mark">DEVELOPER.EXPERT</span>
          <span className="foot-mark-sep">✦</span>
          <span className="foot-mark">DEVELOPER.EXPERT</span>
          <span className="foot-mark-sep">✦</span>
          <span className="foot-mark">DEVELOPER.EXPERT</span>
          <span className="foot-mark-sep">✦</span>
        </div>
      </div>
      <div className="foot-bar">
        <span>© {year} · Artur Arslanov</span>
        <span className="center">Built with care, not noise.</span>
        <span className="right">Founding Engineer</span>
      </div>
    </footer>
  );
}
