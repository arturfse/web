/* global React, ReactDOM, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, useTweaks */
const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ─── content ─── */

const NAV = [
  { id: "now",       num: "01", label: "Now" },
  { id: "work",      num: "02", label: "Past" },
  { id: "projects",  num: "03", label: "Shipped" },
  { id: "writing",   num: "04", label: "Notes" },
  { id: "contact",   num: "05", label: "Index" },
];

const CURRENT = {
  role: "Senior Software Engineer",
  company: "SalaryGuide",
  companyItalic: " — current",
  period: "2025 — present",
  blurb: "Leading frontend architecture for transparent salary data in paid media & SEO. Day-to-day: shipping cadence, performance budgets, and the unglamorous craft of making a complex product feel obvious.",
  stack: ["TypeScript", "Next.js", "React", "PostgreSQL", "Performance"],
};

const NOW_LIST = [
  { ix: "→", label: "Reading", meta: "Designing Data-Intensive Apps" },
  { ix: "→", label: "Building", meta: "An ergonomics layer for forms" },
  { ix: "→", label: "Writing",  meta: "On craft over tech-stack" },
  { ix: "→", label: "Listening", meta: "Carbon Based Lifeforms" },
];

const TIMELINE = [
  {
    year: "2023 — 2025",
    co: "Juro",
    coNote: "LegalTech",
    role: "Senior Software Engineer",
    desc: "Contract automation platform. Built real-time collaboration on legal documents and the workflow primitives behind 8,000+ contracts moving through the product each month.",
    meta: [
      { k: "Scale", v: "8K contracts / mo" },
      { k: "Owned", v: "Editor + Workflow" },
      { k: "Team",  v: "Mentored 2" },
    ],
  },
  {
    year: "2019 — 2023",
    co: "Ancor",
    coNote: "Enterprise HR",
    role: "Software Engineer",
    desc: "Full-stack work on a staffing platform serving 1,000+ concurrent HR professionals. Designed the API surface, wrote the migrations, drew the dashboards — the kind of breadth only a small team gives you.",
    meta: [
      { k: "Stack", v: "Node · PG · Vue" },
      { k: "Role", v: "Full-stack" },
      { k: "Users", v: "1K concurrent" },
    ],
  },
];

const PROJECTS = [
  {
    num: "01",
    title: "StickIO Bot",
    italic: "telegram",
    desc: "An AI-powered Telegram bot that turns prompts into vibrant sticker packs. Image processing pipeline, generation queue, and a UX that hides all of it behind one chat message.",
    tags: ["Node.js", "NestJS", "Telegram API", "AI pipeline"],
    href: "https://t.me/stickio_bot",
    status: "Live",
  },
  {
    num: "02",
    title: "Headless UI",
    italic: "react collection",
    desc: "Production-ready headless components for React. Accessible by default, unstyled by intent, zero runtime dependencies — primitives you'd want to copy/paste, but you don't have to.",
    tags: ["React", "TypeScript", "A11y", "Storybook"],
    href: "https://github.com/arslanov-artur/react-headless-ui-collection",
    status: "Open Source",
  },
  {
    num: "03",
    title: "Messenger PWA",
    italic: "real-time",
    desc: "A Progressive Web App messenger with offline-first sync, push notifications, and end-to-end encryption. WebSockets when online, IndexedDB when the metro goes underground.",
    tags: ["PWA", "WebSockets", "IndexedDB", "E2E"],
    href: "https://github.com/arslanov-artur/messenger-pwa",
    status: "Featured",
  },
];

const WRITING = [
  {
    num: "N°01",
    title: "Your tech stack",
    italic: " doesn't matter.",
    meta: "LinkedIn · 2025",
    href: "https://www.linkedin.com/posts/artur-arslanov_your-tech-stack-doesnt-matter-your-users-activity-7359454836905455616-AvJF",
  },
  {
    num: "N°02",
    title: "The myth of the",
    italic: " 10x developer.",
    meta: "LinkedIn · 2025",
    href: "https://www.linkedin.com/posts/artur-arslanov_the-myth-of-the-10x-developer-met-a-10x-activity-7349791548181549056-WR5O",
  },
];

const DIRECTORY = [
  { k: "Email",     v: "arthur.arslanoov@gmail.com",        href: "mailto:arthur.arslanoov@gmail.com" },
  { k: "LinkedIn",  v: "in/artur-arslanov",                 href: "https://linkedin.com/in/artur-arslanov" },
  { k: "GitHub",    v: "@arslanov-artur",                   href: "https://github.com/arslanov-artur" },
  { k: "Telegram",  v: "@arthur_arslanov",                  href: "https://t.me/arthur_arslanov" },
  { k: "Channel",   v: "t.me/js_arthur",                    href: "https://t.me/js_arthur" },
  { k: "WhatsApp",  v: "+49 152 5755 0122",                 href: "https://wa.me/+4915257550122" },
];

const RIBBON_ITEMS = [
  "Real-time collaboration",
  "Document automation",
  "API architecture",
  "Performance budgets",
  "Editorial craft",
  "TypeScript end-to-end",
  "Pragmatic delivery",
];

/* ─── hooks & utils ─── */

function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const threshold = options.threshold ?? 0.15;

    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // trigger when the element's top has crossed (1 - threshold) of the viewport,
      // OR when it's already partially above the fold
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
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Also try IO as a belt-and-braces signal (some browsers, no-scroll resizes)
    let io;
    try {
      io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        }
      }, { threshold, ...options });
      io.observe(el);
    } catch (e) { /* ignore */ }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (io) io.disconnect();
    };
  }, []);
  return inView;
}

function Reveal({ children, delay = 0, as: As = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <As
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </As>
  );
}

function SplitWords({ text, delay = 0, className = "", as: As = "span" }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const words = text.split(" ");
  return (
    <As ref={ref} className={`split ${inView ? "in" : ""} ${className}`} style={{ "--delay": `${delay}ms` }}>
      {words.map((w, i) => (
        <span key={i} className="w">
          <span style={{ "--i": i }}>{w}</span>
        </span>
      ))}
    </As>
  );
}

function MaskLine({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <span ref={ref} className={`mask ${inView ? "in" : ""} ${className}`} style={{ "--delay": `${delay}ms` }}>
      <span>{children}</span>
    </span>
  );
}

function useClock(tz) {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const formatter = useMemo(() => new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz,
  }), [tz]);
  return formatter.format(t);
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // anchor line ~40% from top
      const anchor = vh * 0.4;
      let best = ids[0];
      let bestDist = Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        // prefer sections whose top has passed the anchor and are still in view
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
    window.addEventListener("scroll", check, { passive: true });
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
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* magnetic link wrapper — subtle */
function Magnetic({ children, strength = 0.25 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const reset = () => { el.style.transform = "translate(0,0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);
  return <span ref={ref} className="mag">{children}</span>;
}

/* ─── chrome ─── */

function Chrome({ theme, setTheme }) {
  const clock = useClock();
  const active = useActiveSection(["hero", ...NAV.map((n) => n.id)]);

  return (
    <header className="chrome">
      <div className="chrome-id">
        <span className="dot" aria-hidden="true"></span>
        <span>AA / Senior SWE</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span>Available Q3 2026</span>
      </div>

      <nav className="chrome-nav" aria-label="Sections">
        {NAV.map((n) => (
          <button
            key={n.id}
            data-active={active === n.id}
            onClick={() => scrollToId(n.id)}
          >
            <span className="nav-num">{n.num}</span>{n.label}
          </button>
        ))}
      </nav>

      <div className="chrome-meta">
        <span className="clock">{clock} CET</span>
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "paper" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "Paper" : "Dark"}
        </button>
      </div>
    </header>
  );
}

/* ─── sections ─── */

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="shell hero-main">
        <Reveal delay={50}>
          <div className="eyebrow">A portfolio by AA &nbsp;/&nbsp; v2026.05</div>
        </Reveal>

        <h1 className="display hero-name">
          <SplitWords text="Artur" delay={200} />{" "}
          <SplitWords text="Arslanov" delay={350} />
          <br/>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--text-dim)", fontWeight: 400 }}>
            <SplitWords text="building things" delay={700} />{" "}
            <SplitWords text="that ship." delay={1000} />
          </span>
        </h1>

        <p className="hero-bio">
          <MaskLine delay={1300}>
            Senior software engineer, six years in.
          </MaskLine>{" "}
          <MaskLine delay={1400}>
            Real-time, document-heavy systems
          </MaskLine>{" "}
          <MaskLine delay={1500}>
            for teams that care
          </MaskLine>{" "}
          <MaskLine delay={1600}>
            about the craft of shipping.
          </MaskLine>
        </p>
      </div>

      <div className="scroll-cue">Scroll</div>
    </section>
  );
}

function Now() {
  return (
    <section id="now">
      <div className="shell">
        <Reveal>
          <div className="section-tag">
            <span className="ix">01</span>
            <span>Currently</span>
            <span className="line"></span>
            <span>In motion</span>
          </div>
        </Reveal>

        <div className="now">
          <Reveal delay={100}>
            <div className="now-card">
              <div className="role">
                <span className="pulse" aria-hidden="true"></span>
                {CURRENT.role}
              </div>
              <h3>
                {CURRENT.company}
                <em>{CURRENT.companyItalic}</em>
              </h3>
              <div className="sub">
                <span>{CURRENT.period}</span>
              </div>
              <p>{CURRENT.blurb}</p>
              <div className="now-stack">
                {CURRENT.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="now-aside">
              <h4>This week</h4>
              <div className="now-list">
                {NOW_LIST.map((item, i) => (
                  <div key={i} className="item">
                    <span className="ix">{item.ix}</span>
                    <span className="label">{item.label}</span>
                    <span className="meta">{item.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Ribbon() {
  // duplicate items twice for seamless marquee
  const doubled = useMemo(() => [...RIBBON_ITEMS, ...RIBBON_ITEMS], []);
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon-track">
        <div className="ribbon-item">
          {doubled.map((it, i) => (
            <React.Fragment key={i}>
              <span>{it.includes(" ") ? <>{it.split(" ").slice(0, -1).join(" ")} <em>{it.split(" ").slice(-1)}</em></> : <em>{it}</em>}</span>
            </React.Fragment>
          ))}
        </div>
        <div className="ribbon-item" aria-hidden="true">
          {doubled.map((it, i) => (
            <React.Fragment key={`b${i}`}>
              <span>{it.includes(" ") ? <>{it.split(" ").slice(0, -1).join(" ")} <em>{it.split(" ").slice(-1)}</em></> : <em>{it}</em>}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work">
      <div className="shell">
        <Reveal>
          <div className="section-tag">
            <span className="ix">02</span>
            <span>Past lives</span>
            <span className="line"></span>
            <span>Six years, three companies</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="h2" style={{ marginBottom: "clamp(40px, 6vh, 72px)", maxWidth: "20ch" }}>
            Where the <em>real</em> work happened.
          </h2>
        </Reveal>

        <div className="timeline">
          {TIMELINE.map((it, i) => (
            <Reveal key={it.co} delay={i * 120}>
              <div className="timeline-item">
                <div className="ti-year past">
                  <span className="dot" aria-hidden="true"></span>
                  {it.year}
                </div>
                <div className="ti-body">
                  <div className="ti-head">
                    <div className="ti-co">
                      {it.co}<em>{it.coNote}</em>
                    </div>
                    <div className="ti-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                      </svg>
                    </div>
                  </div>
                  <div className="eyebrow" style={{ color: "var(--accent)" }}>{it.role}</div>
                  <p className="ti-desc">{it.desc}</p>
                  <div className="ti-meta">
                    {it.meta.map((m) => (
                      <span key={m.k}>
                        <span className="k">{m.k}</span>
                        {m.v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="shell">
        <Reveal>
          <div className="section-tag">
            <span className="ix">03</span>
            <span>Shipped</span>
            <span className="line"></span>
            <span>Selected side projects</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="h2" style={{ marginBottom: "clamp(32px, 5vh, 64px)", maxWidth: "20ch" }}>
            Built on <em>nights</em> and weekends.
          </h2>
        </Reveal>

        <div className="projects">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <a className="proj-row" href={p.href} target="_blank" rel="noopener noreferrer">
                <div className="proj-num">{p.num}</div>
                <div className="proj-main">
                  <div className="proj-title">
                    {p.title} <em>{p.italic}</em>
                  </div>
                  <div className="proj-desc">{p.desc}</div>
                  <div className="proj-tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="proj-cta">
                  <span>{p.status}</span>
                  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                  </svg>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing">
      <div className="shell">
        <Reveal>
          <div className="section-tag">
            <span className="ix">04</span>
            <span>Field notes</span>
            <span className="line"></span>
            <span>Read 1M+ times</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="h2" style={{ marginBottom: "clamp(40px, 6vh, 72px)", maxWidth: "22ch" }}>
            <span className="line-keep">Short thoughts.</span><br /><span className="line-keep"><em>Loud</em> opinions.</span>
          </h2>
        </Reveal>

        <div className="writing">
          {WRITING.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <a className="write-row" href={w.href} target="_blank" rel="noopener noreferrer">
                <span className="wr-num">{w.num}</span>
                <span className="wr-title">
                  {w.title}<em>{w.italic}</em>
                </span>
                <span className="wr-meta">
                  <span>{w.meta}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: 0 }}>
      <div className="shell">
        <Reveal>
          <div className="section-tag">
            <span className="ix">05</span>
            <span>Index</span>
            <span className="line"></span>
            <span>Get in touch</span>
          </div>
        </Reveal>

        <div className="contact-wrap">
          <div>
            <h2 className="contact-headline">
              <MaskLine>Let's build</MaskLine><br/>
              <MaskLine delay={120}><em>something</em></MaskLine><br/>
              <MaskLine delay={240}>worth shipping.</MaskLine>
            </h2>
            <Reveal delay={400}>
              <Magnetic>
                <a className="contact-mail" href="mailto:arthur.arslanoov@gmail.com">
                  arthur.arslanoov@gmail.com
                  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                  </svg>
                </a>
              </Magnetic>
            </Reveal>
          </div>

          <Reveal delay={200} className="contact-dir">
            {DIRECTORY.map((d) => (
              <a
                key={d.k}
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-dir-row"
              >
                <span className="k">{d.k}</span>
                <span className="v">{d.v}</span>
                <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="foot-mark" aria-hidden="true">ARSLANOV</div>
      <div className="foot">
        <span>© {year} · Artur Arslanov</span>
        <span className="center">Built with care, not noise.</span>
        <span className="right">v2026.05 · Last update May 17</span>
      </div>
    </footer>
  );
}

/* ─── tweaks ─── */

const ACCENT_OPTIONS = [
  { name: "Amber",   value: "#E4863A" },
  { name: "Pistache", value: "#9DB87C" },
  { name: "Iron",    value: "#7A8190" },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "#E4863A",
  "motion": "full"
}/*EDITMODE-END*/;

/* ─── app ─── */

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const progress = useScrollProgress();

  // apply theme
  useEffect(() => {
    document.documentElement.dataset.theme = t.theme;
  }, [t.theme]);

  // apply accent
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    // derive accent-soft
    document.documentElement.style.setProperty("--accent-soft", t.accent + "1F");
  }, [t.accent]);

  // motion
  useEffect(() => {
    document.documentElement.style.setProperty("scroll-behavior", t.motion === "full" ? "smooth" : "auto");
    if (t.motion === "off") {
      document.documentElement.classList.add("no-motion");
    } else {
      document.documentElement.classList.remove("no-motion");
    }
  }, [t.motion]);

  return (
    <>
      <div className="progress" style={{ "--p": progress + "%" }} aria-hidden="true"></div>

      <Chrome theme={t.theme} setTheme={(v) => setTweak("theme", v)} />

      <main>
        <Hero />
        <Ribbon />
        <Now />
        <Work />
        <Projects />
        <Writing />
        <Contact />
      </main>

      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={["dark", "paper"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENT_OPTIONS.map((a) => a.value)}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Motion" />
        <TweakRadio
          label="Reveals"
          value={t.motion}
          options={["full", "light", "off"]}
          onChange={(v) => setTweak("motion", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
