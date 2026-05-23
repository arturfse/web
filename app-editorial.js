function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} = React;
const NAV = [{
  id: "now",
  num: "01",
  label: "Now"
}, {
  id: "work",
  num: "02",
  label: "Past"
}, {
  id: "projects",
  num: "03",
  label: "Shipped"
}, {
  id: "writing",
  num: "04",
  label: "Notes"
}, {
  id: "contact",
  num: "05",
  label: "Index"
}];
const CURRENT = {
  role: "Senior Software Engineer",
  company: "SalaryGuide",
  companyItalic: " — current",
  period: "2025 — present",
  blurb: "Leading frontend architecture for transparent salary data in paid media & SEO. Day-to-day: shipping cadence, performance budgets, and the unglamorous craft of making a complex product feel obvious.",
  stack: ["TypeScript", "Next.js", "React", "PostgreSQL", "Performance"]
};
const NOW_LIST = [{
  ix: "→",
  label: "Reading",
  meta: "Designing Data-Intensive Apps"
}, {
  ix: "→",
  label: "Building",
  meta: "An ergonomics layer for forms"
}, {
  ix: "→",
  label: "Writing",
  meta: "On craft over tech-stack"
}, {
  ix: "→",
  label: "Listening",
  meta: "Carbon Based Lifeforms"
}];
const TIMELINE = [{
  year: "2023 — 2025",
  co: "Juro",
  coNote: "LegalTech",
  role: "Senior Software Engineer",
  desc: "Contract automation platform. Built real-time collaboration on legal documents and the workflow primitives behind 8,000+ contracts moving through the product each month.",
  meta: [{
    k: "Scale",
    v: "8K contracts / mo"
  }, {
    k: "Owned",
    v: "Editor + Workflow"
  }, {
    k: "Team",
    v: "Mentored 2"
  }]
}, {
  year: "2019 — 2023",
  co: "Ancor",
  coNote: "Enterprise HR",
  role: "Software Engineer",
  desc: "Full-stack work on a staffing platform serving 1,000+ concurrent HR professionals. Designed the API surface, wrote the migrations, drew the dashboards — the kind of breadth only a small team gives you.",
  meta: [{
    k: "Stack",
    v: "Node · PG · Vue"
  }, {
    k: "Role",
    v: "Full-stack"
  }, {
    k: "Users",
    v: "1K concurrent"
  }]
}];
const PROJECTS = [{
  num: "01",
  title: "StickIO Bot",
  italic: "telegram",
  desc: "An AI-powered Telegram bot that turns prompts into vibrant sticker packs. Image processing pipeline, generation queue, and a UX that hides all of it behind one chat message.",
  tags: ["Node.js", "NestJS", "Telegram API", "AI pipeline"],
  href: "https://t.me/stickio_bot",
  status: "Live"
}, {
  num: "02",
  title: "Headless UI",
  italic: "react collection",
  desc: "Production-ready headless components for React. Accessible by default, unstyled by intent, zero runtime dependencies — primitives you'd want to copy/paste, but you don't have to.",
  tags: ["React", "TypeScript", "A11y", "Storybook"],
  href: "https://github.com/arslanov-artur/react-headless-ui-collection",
  status: "Open Source"
}, {
  num: "03",
  title: "Messenger PWA",
  italic: "real-time",
  desc: "A Progressive Web App messenger with offline-first sync, push notifications, and end-to-end encryption. WebSockets when online, IndexedDB when the metro goes underground.",
  tags: ["PWA", "WebSockets", "IndexedDB", "E2E"],
  href: "https://github.com/arslanov-artur/messenger-pwa",
  status: "Featured"
}];
const WRITING = [{
  num: "N°01",
  title: "Your tech stack",
  italic: " doesn't matter.",
  meta: "LinkedIn · 2025",
  href: "https://www.linkedin.com/posts/artur-arslanov_your-tech-stack-doesnt-matter-your-users-activity-7359454836905455616-AvJF"
}, {
  num: "N°02",
  title: "The myth of the",
  italic: " 10x developer.",
  meta: "LinkedIn · 2025",
  href: "https://www.linkedin.com/posts/artur-arslanov_the-myth-of-the-10x-developer-met-a-10x-activity-7349791548181549056-WR5O"
}];
const DIRECTORY = [{
  k: "Email",
  v: "senior@developer.expert",
  href: "mailto:senior@developer.expert"
}, {
  k: "LinkedIn",
  v: "in/artur-arslanov",
  href: "https://linkedin.com/in/artur-arslanov"
}, {
  k: "GitHub",
  v: "@arturfse",
  href: "https://github.com/arturfse"
}, {
  k: "Telegram",
  v: "@arthur_arslanov",
  href: "https://t.me/arthur_arslanov"
}, {
  k: "Channel",
  v: "t.me/js_arthur",
  href: "https://t.me/js_arthur"
}, {
  k: "WhatsApp",
  v: "+49 152 5755 0122",
  href: "https://wa.me/+4915257550122"
}];
const RIBBON_ITEMS = ["Real-time collaboration", "Document automation", "API architecture", "Performance budgets", "Editorial craft", "TypeScript end-to-end", "Pragmatic delivery"];
function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const threshold = options.threshold ?? 0.15;
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * (1 - threshold) && r.bottom > 0) {
        setInView(true);
        return true;
      }
      return false;
    };
    if (check()) return;
    const onScroll = () => {
      if (check()) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    let io;
    try {
      io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        }
      }, {
        threshold,
        ...options
      });
      io.observe(el);
    } catch (e) {}
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (io) io.disconnect();
    };
  }, []);
  return inView;
}
function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return React.createElement(As, _extends({
    ref: ref,
    className: `reveal ${inView ? "in" : ""} ${className}`,
    style: {
      "--delay": `${delay}ms`
    }
  }, rest), children);
}
function SplitWords({
  text,
  delay = 0,
  className = "",
  as: As = "span"
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const words = text.split(" ");
  return React.createElement(As, {
    ref: ref,
    className: `split ${inView ? "in" : ""} ${className}`,
    style: {
      "--delay": `${delay}ms`
    }
  }, words.map((w, i) => React.createElement("span", {
    key: i,
    className: "w"
  }, React.createElement("span", {
    style: {
      "--i": i
    }
  }, w))));
}
function MaskLine({
  children,
  delay = 0,
  className = ""
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return React.createElement("span", {
    ref: ref,
    className: `mask ${inView ? "in" : ""} ${className}`,
    style: {
      "--delay": `${delay}ms`
    }
  }, React.createElement("span", null, children));
}
function useClock(tz) {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const formatter = useMemo(() => new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz
  }), [tz]);
  return formatter.format(t);
}
function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const anchor = vh * 0.4;
      let best = ids[0];
      let bestDist = Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= anchor && r.bottom > anchor) {
          best = id;
          bestDist = 0;
          break;
        }
        const dist = Math.abs(r.top - anchor);
        if (r.top <= anchor && dist < bestDist) {
          best = id;
          bestDist = dist;
        }
      }
      setActive(best);
    };
    check();
    window.addEventListener("scroll", check, {
      passive: true
    });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);
  return active;
}
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
function Magnetic({
  children,
  strength = 0.25
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const reset = () => {
      el.style.transform = "translate(0,0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);
  return React.createElement("span", {
    ref: ref,
    className: "mag"
  }, children);
}
function Chrome({
  theme,
  setTheme
}) {
  const clock = useClock();
  const active = useActiveSection(["hero", ...NAV.map(n => n.id)]);
  return React.createElement("header", {
    className: "chrome"
  }, React.createElement("div", {
    className: "chrome-id"
  }, React.createElement("span", {
    className: "dot",
    "aria-hidden": "true"
  }), React.createElement("span", null, "AA / Senior SWE"), React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "\xB7"), React.createElement("span", null, "Available Q3 2026")), React.createElement("nav", {
    className: "chrome-nav",
    "aria-label": "Sections"
  }, NAV.map(n => React.createElement("button", {
    key: n.id,
    "data-active": active === n.id,
    onClick: () => scrollToId(n.id)
  }, React.createElement("span", {
    className: "nav-num"
  }, n.num), n.label))), React.createElement("div", {
    className: "chrome-meta"
  }, React.createElement("span", {
    className: "clock"
  }, clock, " CET"), React.createElement("button", {
    className: "theme-btn",
    onClick: () => setTheme(theme === "dark" ? "paper" : "dark"),
    "aria-label": "Toggle theme"
  }, theme === "dark" ? "Paper" : "Dark")));
}
function Hero() {
  return React.createElement("section", {
    id: "hero",
    className: "hero"
  }, React.createElement("div", {
    className: "shell hero-main"
  }, React.createElement(Reveal, {
    delay: 50
  }, React.createElement("div", {
    className: "eyebrow"
  }, "A portfolio by AA \xA0/\xA0 v2026.05")), React.createElement("h1", {
    className: "display hero-name"
  }, React.createElement(SplitWords, {
    text: "Artur",
    delay: 200
  }), " ", React.createElement(SplitWords, {
    text: "Arslanov",
    delay: 350
  }), React.createElement("br", null), React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      color: "var(--text-dim)",
      fontWeight: 400
    }
  }, React.createElement(SplitWords, {
    text: "building things",
    delay: 700
  }), " ", React.createElement(SplitWords, {
    text: "that ship.",
    delay: 1000
  }))), React.createElement("p", {
    className: "hero-bio"
  }, React.createElement(MaskLine, {
    delay: 1300
  }, "Senior software engineer, six years in."), " ", React.createElement(MaskLine, {
    delay: 1400
  }, "Real-time, document-heavy systems"), " ", React.createElement(MaskLine, {
    delay: 1500
  }, "for teams that care"), " ", React.createElement(MaskLine, {
    delay: 1600
  }, "about the craft of shipping."))), React.createElement("div", {
    className: "scroll-cue"
  }, "Scroll"));
}
function Now() {
  return React.createElement("section", {
    id: "now"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "section-tag"
  }, React.createElement("span", {
    className: "ix"
  }, "01"), React.createElement("span", null, "Currently"), React.createElement("span", {
    className: "line"
  }), React.createElement("span", null, "In motion"))), React.createElement("div", {
    className: "now"
  }, React.createElement(Reveal, {
    delay: 100
  }, React.createElement("div", {
    className: "now-card"
  }, React.createElement("div", {
    className: "role"
  }, React.createElement("span", {
    className: "pulse",
    "aria-hidden": "true"
  }), CURRENT.role), React.createElement("h3", null, CURRENT.company, React.createElement("em", null, CURRENT.companyItalic)), React.createElement("div", {
    className: "sub"
  }, React.createElement("span", null, CURRENT.period)), React.createElement("p", null, CURRENT.blurb), React.createElement("div", {
    className: "now-stack"
  }, CURRENT.stack.map(s => React.createElement("span", {
    key: s
  }, s))))), React.createElement(Reveal, {
    delay: 250
  }, React.createElement("div", {
    className: "now-aside"
  }, React.createElement("h4", null, "This week"), React.createElement("div", {
    className: "now-list"
  }, NOW_LIST.map((item, i) => React.createElement("div", {
    key: i,
    className: "item"
  }, React.createElement("span", {
    className: "ix"
  }, item.ix), React.createElement("span", {
    className: "label"
  }, item.label), React.createElement("span", {
    className: "meta"
  }, item.meta)))))))));
}
function Ribbon() {
  const doubled = useMemo(() => [...RIBBON_ITEMS, ...RIBBON_ITEMS], []);
  return React.createElement("div", {
    className: "ribbon",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "ribbon-track"
  }, React.createElement("div", {
    className: "ribbon-item"
  }, doubled.map((it, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement("span", null, it.includes(" ") ? React.createElement(React.Fragment, null, it.split(" ").slice(0, -1).join(" "), " ", React.createElement("em", null, it.split(" ").slice(-1))) : React.createElement("em", null, it))))), React.createElement("div", {
    className: "ribbon-item",
    "aria-hidden": "true"
  }, doubled.map((it, i) => React.createElement(React.Fragment, {
    key: `b${i}`
  }, React.createElement("span", null, it.includes(" ") ? React.createElement(React.Fragment, null, it.split(" ").slice(0, -1).join(" "), " ", React.createElement("em", null, it.split(" ").slice(-1))) : React.createElement("em", null, it)))))));
}
function Work() {
  return React.createElement("section", {
    id: "work"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "section-tag"
  }, React.createElement("span", {
    className: "ix"
  }, "02"), React.createElement("span", null, "Past lives"), React.createElement("span", {
    className: "line"
  }), React.createElement("span", null, "Six years, three companies"))), React.createElement(Reveal, {
    delay: 100
  }, React.createElement("h2", {
    className: "h2",
    style: {
      marginBottom: "clamp(40px, 6vh, 72px)",
      maxWidth: "20ch"
    }
  }, "Where the ", React.createElement("em", null, "real"), " work happened.")), React.createElement("div", {
    className: "timeline"
  }, TIMELINE.map((it, i) => React.createElement(Reveal, {
    key: it.co,
    delay: i * 120
  }, React.createElement("div", {
    className: "timeline-item"
  }, React.createElement("div", {
    className: "ti-year past"
  }, React.createElement("span", {
    className: "dot",
    "aria-hidden": "true"
  }), it.year), React.createElement("div", {
    className: "ti-body"
  }, React.createElement("div", {
    className: "ti-head"
  }, React.createElement("div", {
    className: "ti-co"
  }, it.co, React.createElement("em", null, it.coNote)), React.createElement("div", {
    className: "ti-arrow",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, React.createElement("path", {
    d: "M7 17L17 7"
  }), React.createElement("path", {
    d: "M7 7h10v10"
  })))), React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--accent)"
    }
  }, it.role), React.createElement("p", {
    className: "ti-desc"
  }, it.desc), React.createElement("div", {
    className: "ti-meta"
  }, it.meta.map(m => React.createElement("span", {
    key: m.k
  }, React.createElement("span", {
    className: "k"
  }, m.k), m.v))))))))));
}
function Projects() {
  return React.createElement("section", {
    id: "projects"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "section-tag"
  }, React.createElement("span", {
    className: "ix"
  }, "03"), React.createElement("span", null, "Shipped"), React.createElement("span", {
    className: "line"
  }), React.createElement("span", null, "Selected side projects"))), React.createElement(Reveal, {
    delay: 100
  }, React.createElement("h2", {
    className: "h2",
    style: {
      marginBottom: "clamp(32px, 5vh, 64px)",
      maxWidth: "20ch"
    }
  }, "Built on ", React.createElement("em", null, "nights"), " and weekends.")), React.createElement("div", {
    className: "projects"
  }, PROJECTS.map((p, i) => React.createElement(Reveal, {
    key: p.title,
    delay: i * 100
  }, React.createElement("a", {
    className: "proj-row",
    href: p.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("div", {
    className: "proj-num"
  }, p.num), React.createElement("div", {
    className: "proj-main"
  }, React.createElement("div", {
    className: "proj-title"
  }, p.title, " ", React.createElement("em", null, p.italic)), React.createElement("div", {
    className: "proj-desc"
  }, p.desc), React.createElement("div", {
    className: "proj-tags"
  }, p.tags.map(t => React.createElement("span", {
    key: t
  }, t)))), React.createElement("div", {
    className: "proj-cta"
  }, React.createElement("span", null, p.status), React.createElement("svg", {
    className: "arr",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, React.createElement("path", {
    d: "M7 17L17 7"
  }), React.createElement("path", {
    d: "M7 7h10v10"
  })))))))));
}
function Writing() {
  return React.createElement("section", {
    id: "writing"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "section-tag"
  }, React.createElement("span", {
    className: "ix"
  }, "04"), React.createElement("span", null, "Field notes"), React.createElement("span", {
    className: "line"
  }), React.createElement("span", null, "Read 1M+ times"))), React.createElement(Reveal, {
    delay: 100
  }, React.createElement("h2", {
    className: "h2",
    style: {
      marginBottom: "clamp(40px, 6vh, 72px)",
      maxWidth: "22ch"
    }
  }, React.createElement("span", {
    className: "line-keep"
  }, "Short thoughts."), React.createElement("br", null), React.createElement("span", {
    className: "line-keep"
  }, React.createElement("em", null, "Loud"), " opinions."))), React.createElement("div", {
    className: "writing"
  }, WRITING.map((w, i) => React.createElement(Reveal, {
    key: w.title,
    delay: i * 100
  }, React.createElement("a", {
    className: "write-row",
    href: w.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("span", {
    className: "wr-num"
  }, w.num), React.createElement("span", {
    className: "wr-title"
  }, w.title, React.createElement("em", null, w.italic)), React.createElement("span", {
    className: "wr-meta"
  }, React.createElement("span", null, w.meta), React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, React.createElement("path", {
    d: "M7 17L17 7"
  }), React.createElement("path", {
    d: "M7 7h10v10"
  })))))))));
}
function Contact() {
  return React.createElement("section", {
    id: "contact",
    style: {
      paddingBottom: 0
    }
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "section-tag"
  }, React.createElement("span", {
    className: "ix"
  }, "05"), React.createElement("span", null, "Index"), React.createElement("span", {
    className: "line"
  }), React.createElement("span", null, "Get in touch"))), React.createElement("div", {
    className: "contact-wrap"
  }, React.createElement("div", null, React.createElement("h2", {
    className: "contact-headline"
  }, React.createElement(MaskLine, null, "Let's build"), React.createElement("br", null), React.createElement(MaskLine, {
    delay: 120
  }, React.createElement("em", null, "something")), React.createElement("br", null), React.createElement(MaskLine, {
    delay: 240
  }, "worth shipping.")), React.createElement(Reveal, {
    delay: 400
  }, React.createElement(Magnetic, null, React.createElement("a", {
    className: "contact-mail",
    href: "mailto:senior@developer.expert"
  }, "senior@developer.expert", React.createElement("svg", {
    className: "arr",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, React.createElement("path", {
    d: "M7 17L17 7"
  }), React.createElement("path", {
    d: "M7 7h10v10"
  })))))), React.createElement(Reveal, {
    delay: 200,
    className: "contact-dir"
  }, DIRECTORY.map(d => React.createElement("a", {
    key: d.k,
    href: d.href,
    target: d.href.startsWith("http") ? "_blank" : undefined,
    rel: "noopener noreferrer",
    className: "contact-dir-row"
  }, React.createElement("span", {
    className: "k"
  }, d.k), React.createElement("span", {
    className: "v"
  }, d.v), React.createElement("svg", {
    className: "arr",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, React.createElement("path", {
    d: "M7 17L17 7"
  }), React.createElement("path", {
    d: "M7 7h10v10"
  }))))))));
}
function Footer() {
  const year = new Date().getFullYear();
  return React.createElement("footer", null, React.createElement("div", {
    className: "foot-mark",
    "aria-hidden": "true"
  }, "ARSLANOV"), React.createElement("div", {
    className: "foot"
  }, React.createElement("span", null, "\xA9 ", year, " \xB7 Artur Arslanov"), React.createElement("span", {
    className: "center"
  }, "Built with care, not noise."), React.createElement("span", {
    className: "right"
  }, "v2026.05 \xB7 Last update May 17")));
}
const ACCENT_OPTIONS = [{
  name: "Amber",
  value: "#E4863A"
}, {
  name: "Pistache",
  value: "#9DB87C"
}, {
  name: "Iron",
  value: "#7A8190"
}];
const TWEAK_DEFAULTS = {
  "theme": "dark",
  "accent": "#E4863A",
  "motion": "full"
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const progress = useScrollProgress();
  useEffect(() => {
    document.documentElement.dataset.theme = t.theme;
  }, [t.theme]);
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-soft", t.accent + "1F");
  }, [t.accent]);
  useEffect(() => {
    document.documentElement.style.setProperty("scroll-behavior", t.motion === "full" ? "smooth" : "auto");
    if (t.motion === "off") {
      document.documentElement.classList.add("no-motion");
    } else {
      document.documentElement.classList.remove("no-motion");
    }
  }, [t.motion]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "progress",
    style: {
      "--p": progress + "%"
    },
    "aria-hidden": "true"
  }), React.createElement(Chrome, {
    theme: t.theme,
    setTheme: v => setTweak("theme", v)
  }), React.createElement("main", null, React.createElement(Hero, null), React.createElement(Ribbon, null), React.createElement(Now, null), React.createElement(Work, null), React.createElement(Projects, null), React.createElement(Writing, null), React.createElement(Contact, null)), React.createElement(Footer, null), React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, React.createElement(TweakSection, {
    label: "Theme"
  }), React.createElement(TweakRadio, {
    label: "Mode",
    value: t.theme,
    options: ["dark", "paper"],
    onChange: v => setTweak("theme", v)
  }), React.createElement(TweakColor, {
    label: "Accent",
    value: t.accent,
    options: ACCENT_OPTIONS.map(a => a.value),
    onChange: v => setTweak("accent", v)
  }), React.createElement(TweakSection, {
    label: "Motion"
  }), React.createElement(TweakRadio, {
    label: "Reveals",
    value: t.motion,
    options: ["full", "light", "off"],
    onChange: v => setTweak("motion", v)
  })));
}
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement(App, null));
