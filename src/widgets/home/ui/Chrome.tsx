import { useState, useEffect, useRef } from "react";
import { useActiveSection } from "@shared/lib/hooks";
import { scrollToId } from "@shared/lib/dom";
import { ArrowUR } from "@shared/ui/icons";
import { NAV, SECTION_IDS } from "@entities/home-content/model/nav";

export type Theme = "dark" | "paper";
export type AccentPalette = readonly [string, string, string, string];

export const ACCENT_OPTIONS = [
  ["#FFB259", "#FF6B4A", "#FF3D7F", "#B25CFF"], // sunset (default)
  ["#7FE6FF", "#5C9CFF", "#7C5CFF", "#FF6BD0"], // electric
  ["#7CFFB6", "#5CFFE1", "#5CCFFF", "#7C8DFF"], // aurora
  ["#FFE066", "#FF9F45", "#FF5C8A", "#A055FF"], // candy
] as const satisfies readonly [AccentPalette, ...AccentPalette[]];

type SwatchProps = {
  colors: AccentPalette;
};

function Swatch({ colors }: SwatchProps) {
  return (
    <span className="chrome-swatch" aria-hidden="true">
      {colors.slice(0, 4).map((c, i) => (
        <span key={i} style={{ background: c }} />
      ))}
    </span>
  );
}

type ThemeButtonProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

function ThemeButton({ theme, setTheme }: ThemeButtonProps) {
  const next = theme === "dark" ? "paper" : "dark";
  return (
    <button
      className="chrome-icon-btn chrome-theme"
      onClick={() => setTheme(next)}
      title={`Switch to ${next} mode`}
      aria-label={`Switch to ${next} mode`}
    >
      <span className="chrome-theme-icon">
        {theme === "dark" ? (
          /* moon */
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          /* sun */
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </span>
    </button>
  );
}

type PalettePickerProps = {
  value: AccentPalette;
  options: typeof ACCENT_OPTIONS;
  onChange: (value: AccentPalette) => void;
};

function PalettePicker({ value, options, onChange }: PalettePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const currentIndex = options.findIndex(o => o.join() === value.join());
  return (
    <div className="chrome-palette" ref={ref}>
      <button
        className="chrome-icon-btn chrome-palette-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Color palette"
        aria-expanded={open}
        title="Color palette"
      >
        <Swatch colors={value} />
      </button>
      <div className={`chrome-palette-menu ${open ? "open" : ""}`} role="menu">
        {options.map((opt, i) => (
          <button
            key={i}
            role="menuitemradio"
            aria-checked={i === currentIndex}
            className={`chrome-palette-opt ${i === currentIndex ? "active" : ""}`}
            onClick={() => { onChange(opt); setOpen(false); }}
            title={["Sunset", "Electric", "Aurora", "Candy"][i] || `Palette ${i + 1}`}
          >
            <Swatch colors={opt} />
          </button>
        ))}
      </div>
    </div>
  );
}

type ChromeProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  palette: AccentPalette;
  setPalette: (palette: AccentPalette) => void;
};

export function Chrome({ theme, setTheme, palette, setPalette }: ChromeProps) {
  const active = useActiveSection(SECTION_IDS);
  return (
    <header className="chrome">
      <div className="chrome-logo">
        <span className="mark">A</span>
        <span>Arslanov</span>
      </div>
      <nav className="chrome-nav">
        {NAV.map(n => (
          <button
            key={n.id}
            data-active={active === n.id}
            onClick={() => scrollToId(n.id)}
          >
            <span className="num">{n.num}</span>
            <span>{n.label}</span>
          </button>
        ))}
      </nav>
      <div className="chrome-controls">
        <ThemeButton theme={theme} setTheme={setTheme} />
        <PalettePicker value={palette} options={ACCENT_OPTIONS} onChange={setPalette} />
      </div>
      <button
        className="chrome-cta"
        onClick={() => scrollToId("contact")}
      >
        <span>Get in touch</span>
        <span className="arr"><ArrowUR size={11} /></span>
      </button>
    </header>
  );
}
