import { lazy, useEffect } from "react";
import { useScrollProgress } from "@shared/lib/hooks";
import type { CSSVarStyle } from "@shared/types/css";
import { useTweaks } from "@features/tweaks";
import { Chrome, ACCENT_OPTIONS, type AccentPalette, type Theme } from "@widgets/home/ui/Chrome";
import { StickyCTA } from "@widgets/home/ui/components";
import { LazySection } from "@widgets/home/ui/LazySection";
import { Hero } from "@widgets/home/ui/sections/hero";
import { Strip } from "@widgets/home/ui/sections/strip";
import { Footer } from "@widgets/home/ui/sections/footer";

type IndexTweaks = {
  theme: Theme;
  palette: AccentPalette;
  rotator: boolean;
};

const TWEAK_DEFAULTS: IndexTweaks = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "palette": ["#FFB259", "#FF6B4A", "#FF3D7F", "#B25CFF"],
  "rotator": true
}/*EDITMODE-END*/;

const LazyNow = lazy(() => import("@widgets/home/ui/sections/now").then((module) => ({ default: module.Now })));
const LazyWork = lazy(() => import("@widgets/home/ui/sections/work").then((module) => ({ default: module.Work })));
const LazyProduct = lazy(() => import("@widgets/home/ui/sections/product").then((module) => ({ default: module.Product })));
const LazyProjects = lazy(() => import("@widgets/home/ui/sections/projects").then((module) => ({ default: module.Projects })));
const LazyWriting = lazy(() => import("@widgets/home/ui/sections/writing").then((module) => ({ default: module.Writing })));
const LazyContact = lazy(() => import("@widgets/home/ui/sections/contact").then((module) => ({ default: module.Contact })));
const CONTACT_SECTION_STYLE = { paddingTop: "clamp(40px, 6vh, 80px)" };

export function HomePage() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const progress = useScrollProgress();

  useEffect(() => {
    document.documentElement.dataset.theme = t.theme;
  }, [t.theme]);

  useEffect(() => {
    const pal = t.palette || ACCENT_OPTIONS[0];
    const [c1, c2, c3, c4] = pal;
    document.documentElement.style.setProperty("--accent", c2);
    document.documentElement.style.setProperty("--accent-2", c3);
    document.documentElement.style.setProperty("--accent-3", c1);
    document.documentElement.style.setProperty("--accent-grad",
      `linear-gradient(120deg, ${c1} 0%, ${c2} 35%, ${c3} 75%, ${c4} 100%)`);
  }, [t.palette]);

  return (
    <>
      <div className="progress" style={{ "--p": `${progress}%` } as CSSVarStyle} aria-hidden="true" />

      <Chrome
        theme={t.theme}
        setTheme={v => setTweak("theme", v)}
        palette={t.palette}
        setPalette={v => setTweak("palette", v)}
      />

      <main>
        <Hero />
        <Strip />
        <LazySection id="now" component={LazyNow} minHeight={1120} />
        <LazySection id="work" component={LazyWork} minHeight={980} />
        <LazySection id="product" component={LazyProduct} minHeight={1180} />
        <LazySection id="projects" component={LazyProjects} minHeight={980} />
        <LazySection id="writing" component={LazyWriting} minHeight={820} />
        <LazySection
          id="contact"
          component={LazyContact}
          minHeight={820}
          style={CONTACT_SECTION_STYLE}
        />
      </main>

      <Footer />

      <StickyCTA />
    </>
  );
}
