import { useState, useEffect, useRef } from "react";
import { useActiveSection } from "@shared/lib/hooks";
import { scrollToId } from "@shared/lib/dom";
import {
  EXPERIMENT_NAV,
  EXPERIMENT_SECTION_IDS,
  NAV,
  SECTION_IDS,
} from "@entities/home-content/model/nav";

export type Theme = "dark" | "paper";
export type AccentOption = {
  readonly name: string;
  readonly base: string;
  readonly deep: string;
  readonly light: string;
};

export const ACCENT_OPTIONS = [
  { name: "Coral", base: "#FF6B4A", deep: "#E4522F", light: "#FF8F73" },
  { name: "Cobalt", base: "#5C9CFF", deep: "#3D7BE0", light: "#85B5FF" },
  { name: "Emerald", base: "#34D399", deep: "#1FAE7C", light: "#6FE3B8" },
  { name: "Amber", base: "#FFB259", deep: "#E89638", light: "#FFC985" },
] as const satisfies readonly [AccentOption, ...AccentOption[]];

type SwatchProps = {
  color: string;
};

function Swatch({ color }: SwatchProps) {
  return <span className="chrome-swatch" style={{ background: color }} aria-hidden="true" />;
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
  value: AccentOption;
  options: typeof ACCENT_OPTIONS;
  onChange: (value: AccentOption) => void;
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
  const currentIndex = options.findIndex(o => o.base === value.base);
  return (
    <div className="chrome-palette" ref={ref}>
      <button
        className="chrome-icon-btn chrome-palette-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Accent color"
        aria-expanded={open}
        title="Accent color"
      >
        <Swatch color={value.base} />
      </button>
      <div className={`chrome-palette-menu ${open ? "open" : ""}`} role="menu">
        {options.map((opt, i) => (
          <button
            key={opt.base}
            role="menuitemradio"
            aria-checked={i === currentIndex}
            className={`chrome-palette-opt ${i === currentIndex ? "active" : ""}`}
            onClick={() => { onChange(opt); setOpen(false); }}
            title={opt.name}
          >
            <Swatch color={opt.base} />
          </button>
        ))}
      </div>
    </div>
  );
}

type ChromeProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  palette: AccentOption;
  setPalette: (palette: AccentOption) => void;
  showEngagements: boolean;
};

export function Chrome({ theme, setTheme, palette, setPalette, showEngagements }: ChromeProps) {
  const nav = showEngagements ? EXPERIMENT_NAV : NAV;
  const sectionIds = showEngagements ? EXPERIMENT_SECTION_IDS : SECTION_IDS;
  const active = useActiveSection(sectionIds);
  return (
    <header className="chrome">
      <div className="chrome-logo">
        <span className="mark">A</span>
        <span>Artur</span>
      </div>
      <nav className="chrome-nav">
        {nav.map(n => (
          <button
            key={n.id}
            data-active={active === n.id}
            onClick={() => scrollToId(n.id)}
          >
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
      </button>
    </header>
  );
}
