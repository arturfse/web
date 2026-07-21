import { lazy, useEffect } from "react";
import { useScrollProgress } from "@shared/lib/hooks";
import type { CSSVarStyle } from "@shared/types/css";
import { useTweaks } from "@features/tweaks";
import { Chrome, ACCENT_OPTIONS, type AccentOption, type Theme } from "@widgets/home/ui/Chrome";
import { StickyCTA } from "@widgets/home/ui/components";
import { LazySection } from "@widgets/home/ui/LazySection";
import { Hero } from "@widgets/home/ui/sections/hero";
import { Strip } from "@widgets/home/ui/sections/strip";
import { Footer } from "@widgets/home/ui/sections/footer";
import { isWorkWithMeExperiment } from "@entities/home-content/model/experiment";

type IndexTweaks = {
  theme: Theme;
  accent: string;
};

const TWEAK_DEFAULTS: IndexTweaks = /*EDITMODE-BEGIN*/{
  "theme": "paper",
  "accent": "#FF6B4A"
}/*EDITMODE-END*/;

const LazyNow = lazy(() => import("@widgets/home/ui/sections/now").then((module) => ({ default: module.Now })));
const LazyHowIWork = lazy(() => import("@widgets/home/ui/sections/how-i-work").then((module) => ({ default: module.HowIWork })));
const LazyEngagements = lazy(() => import("@widgets/home/ui/sections/engagements").then((module) => ({ default: module.Engagements })));
const LazyWork = lazy(() => import("@widgets/home/ui/sections/work").then((module) => ({ default: module.Work })));
const LazyProduct = lazy(() => import("@widgets/home/ui/sections/product").then((module) => ({ default: module.Product })));
const LazyProjects = lazy(() => import("@widgets/home/ui/sections/projects").then((module) => ({ default: module.Projects })));
const LazyWriting = lazy(() => import("@widgets/home/ui/sections/writing").then((module) => ({ default: module.Writing })));
const LazyContact = lazy(() => import("@widgets/home/ui/sections/contact").then((module) => ({ default: module.Contact })));
const CONTACT_SECTION_STYLE = { paddingTop: "clamp(40px, 6vh, 80px)" };

export function HomePage() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const progress = useScrollProgress();
  const showEngagements = isWorkWithMeExperiment();
  const accent: AccentOption =
    ACCENT_OPTIONS.find(o => o.base === t.accent) ?? ACCENT_OPTIONS[0];

  useEffect(() => {
    document.documentElement.dataset.theme = t.theme;
  }, [t.theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent.base);
    document.documentElement.style.setProperty("--accent-2", accent.deep);
    document.documentElement.style.setProperty("--accent-3", accent.light);
  }, [accent]);

  return (
    <>
      <div className="progress" style={{ "--p": `${progress}%` } as CSSVarStyle} aria-hidden="true" />

      <Chrome
        theme={t.theme}
        setTheme={v => setTweak("theme", v)}
        palette={accent}
        setPalette={v => setTweak("accent", v.base)}
        showEngagements={showEngagements}
      />

      <main>
        <Hero />
        <Strip />
        <LazySection id="how-i-work" component={LazyHowIWork} minHeight={640} />
        <LazySection id="now" component={LazyNow} minHeight={1120} />
        {showEngagements && (
          <LazySection id="engagements" component={LazyEngagements} minHeight={920} />
        )}
        <LazySection id="work" component={LazyWork} minHeight={980} />
        <LazySection id="writing" component={LazyWriting} minHeight={820} />
        <LazySection id="product" component={LazyProduct} minHeight={1180} />
        <LazySection id="projects" component={LazyProjects} minHeight={980} />
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
