
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot-wrap">
      <div className="foot-bar">
        <span>© {year} Artur Arslanov</span>
      </div>
    </footer>
  );
}
