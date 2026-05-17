/* global React, ReactDOM, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, useTweaks */
const { useState, useEffect, useRef, useMemo } = React;

/* ─────────── content ─────────── */

const NAV = [
  { id: "now",      num: "01", label: "Now" },
  { id: "work",     num: "02", label: "Past" },
  { id: "projects", num: "03", label: "Shipped" },
  { id: "writing",  num: "04", label: "Notes" },
  { id: "contact",  num: "05", label: "Contact" },
];

const ROTATING_WORDS = ["that ship.", "that scale.", "that last.", "that delight."];

const CURRENT = {
  status: "Live now",
  role: "Senior Fullstack Engineer",
  company: "SalaryGuide",
  italic: "current",
  period: "2025 to present",
  blurb: "Rebuilt SalaryGuide from a salary lookup into a full job-search product for marketers. Jobs, resumes, AI tools, payments, and admin systems across 24K salaries, 100K companies, and 500K+ jobs.",
  stack: ["TypeScript", "Next.js", "Node", "PostgreSQL", "Stripe", "AI / LLM"],
  shipped: [
    {
      k: "Job matching",
      v: "75K+ matches · 8K+ runs",
      desc: "A resume and goals, ranked into recommendations. The engine that turns intent into the right shortlist.",
    },
    {
      k: "Apply kit",
      v: "1K+ resume sessions",
      desc: "Upload a resume, pick a job, get a tailored resume, outreach copy, and concrete next steps.",
    },
    {
      k: "Company data layer",
      v: "100K+ enrichments · 58K+ insights",
      desc: "Hiring signals, people data, and company context. The backing layer behind every job page.",
    },
    {
      k: "Paid Edge layer",
      v: "Stripe · paywalls · KPI",
      desc: "Pricing, checkout, paywalls, coupons, dashboards, and KPI reports.",
    },
  ],
  meta: [
    { k: "Scale", v: "500K+ jobs" },
    { k: "Role", v: "Fullstack" },
  ],
};

const TIMELINE = [
  {
    year: "2023 / 2025",
    badge: "2 years",
    co: "Juro",
    coNote: "LegalTech",
    role: "Senior Software Engineer",
    desc: "Contract automation platform. Built real-time collaboration on legal documents and the workflow primitives behind 8,000+ contracts moving through the product each month.",
    illu: "juro",
    meta: [
      { k: "Scale", v: "8K contracts/mo" },
      { k: "Owned", v: "Editor + Workflow" },
      { k: "Team", v: "Mentored 2" },
    ],
  },
  {
    year: "2019 / 2023",
    badge: "4 years",
    co: "Ancor",
    coNote: "Enterprise HR",
    role: "Software Engineer",
    desc: "Full-stack work on a staffing platform serving 1,000+ concurrent HR professionals. Designed the API surface, wrote the migrations, drew the dashboards. The kind of breadth only a small team gives you.",
    illu: "ancor",
    meta: [
      { k: "Stack", v: "Node · PG · Vue" },
      { k: "Role", v: "Full-stack" },
      { k: "Users", v: "1K concurrent" },
    ],
  },
];

const PROJECTS = [
  {
    tag: "AI · Telegram",
    title: "StickIO Bot",
    italic: "telegram",
    desc: "A Telegram bot that turns prompts into vibrant sticker packs. Image processing pipeline, generation queue, and a UX that hides all of it behind one chat message.",
    stack: ["Node.js", "NestJS", "AI pipeline"],
    href: "https://t.me/stickio_bot",
    preview: "bot",
  },
  {
    tag: "Open Source",
    title: "Headless UI",
    italic: "for React",
    desc: "Production-ready headless components for React. Accessible by default, unstyled by intent, zero runtime dependencies. Primitives you'd want to copy/paste, but you don't have to.",
    stack: ["React", "TypeScript", "A11y"],
    href: "https://github.com/arslanov-artur/react-headless-ui-collection",
    preview: "ui",
  },
  {
    tag: "PWA",
    title: "Messenger",
    italic: "offline-first",
    desc: "A Progressive Web App messenger with offline sync, push notifications, and end-to-end encryption. WebSockets when online, IndexedDB when the metro goes underground.",
    stack: ["PWA", "WebSockets", "E2E"],
    href: "https://github.com/arslanov-artur/messenger-pwa",
    preview: "msg",
  },
];

const WRITING = [
  {
    num: "N°01",
    title: "Your tech stack",
    italic: " doesn't matter.",
    blurb: "If your users can't tell the difference between your stack and any other, neither should your hiring page.",
    meta: "LinkedIn · 2025",
    views: "780k views",
    href: "https://www.linkedin.com/posts/artur-arslanov_your-tech-stack-doesnt-matter-your-users-activity-7359454836905455616-AvJF",
  },
  {
    num: "N°02",
    title: "The myth of the",
    italic: " 10x developer.",
    blurb: "I met a 10x developer once. They weren't faster. They were just clearer about what not to build.",
    meta: "LinkedIn · 2025",
    views: "320k views",
    href: "https://www.linkedin.com/posts/artur-arslanov_the-myth-of-the-10x-developer-met-a-10x-activity-7349791548181549056-WR5O",
  },
];

const CONTACT_KEY = String.fromCharCode(115,105,116,101,45,107,101,121,45,50,48,50,54);
const CONTACT = {
  email: [18,27,0,13,88,25,75,24,95,65,92,83,88,28,6,2,37,74,6,4,16,65,28,83,93,91],
  linkedinUrl: [27,29,0,21,94,81,74,86,65,91,94,89,83,23,0,26,75,78,4,8,86,68,92,31,83,68,7,28,6,72,76,25,22,21,76,92,95,68],
  linkedinText: [26,7,91,4,95,31,16,11,0,83,66,65,90,18,7,27,19],
  githubUrl: [27,29,0,21,94,81,74,86,74,91,68,90,67,17,71,23,10,64,68,4,11,94,94,81,92,89,5,68,21,23,89,30,23],
  githubText: [51,8,6,22,65,10,11,22,91,31,81,64,66,6,27],
  telegramUrl: [27,29,0,21,94,81,74,86,89,28,93,87,25,18,27,0,16,95,13,22,28],
  telegramText: [51,8,6,17,88,25,3,10,72],
  channelUrl: [27,29,0,21,94,81,74,86,89,28,93,87,25,25,26,43,4,95,31,13,12,95],
  channelText: [7,71,25,0,2,1,22,38,76,64,68,90,67,1],
};

const DIRECTORY = [
  { k: "Email",    d: CONTACT.email, v: CONTACT.email, kind: "mail" },
  { k: "LinkedIn", d: CONTACT.linkedinUrl, v: CONTACT.linkedinText },
  { k: "GitHub",   d: CONTACT.githubUrl, v: CONTACT.githubText },
  { k: "Telegram", d: CONTACT.telegramUrl, v: CONTACT.telegramText },
  { k: "Channel",  d: CONTACT.channelUrl, v: CONTACT.channelText },
];

const STRIP = [
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Real-time collaboration", "Document automation",
  "API architecture", "Performance budgets", "TypeScript end-to-end",
];

/* ─────────── hooks ─────────── */

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
    window.addEventListener("scroll", onScroll, { passive: true });
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
      style={{ "--delay": `${delay}ms`, ...(rest.style || {}) }}
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

function MaskLine({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <span ref={ref} className={`mask ${inView ? "in" : ""}`} style={{ "--delay": `${delay}ms` }}>
      <span>{children}</span>
    </span>
  );
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
      const anchor = vh * 0.4;
      let best = ids[0];
      let bestDist = Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= anchor && r.bottom > anchor) { best = id; bestDist = 0; break; }
        const dist = Math.abs(r.top - anchor);
        if (r.top <= anchor && dist < bestDist) { best = id; bestDist = dist; }
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

const dec = (codes) => {
  try {
    return codes.map((n, i) => String.fromCharCode(n ^ CONTACT_KEY.charCodeAt(i % CONTACT_KEY.length))).join("");
  } catch {
    return "";
  }
};

function ObfText({ data, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || typeof window === "undefined") return;
    const text = dec(data);
    if (!text) return;

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const styles = window.getComputedStyle(canvas);
      const font = styles.font || `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;
      const fontSize = parseFloat(styles.fontSize) || 13;
      const lineHeight = parseFloat(styles.lineHeight) || Math.ceil(fontSize * 1.35);
      const dpr = Math.max(1, window.devicePixelRatio || 1);

      ctx.font = font;
      const width = Math.ceil(ctx.measureText(text).width + 2);
      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(lineHeight * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${lineHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, lineHeight);
      ctx.font = font;
      ctx.fillStyle = styles.color;
      ctx.textBaseline = "middle";
      ctx.fillText(text, 1, lineHeight / 2);
    };

    const redraw = () => window.requestAnimationFrame(draw);
    draw();
    document.fonts?.ready?.then(draw);

    const host = canvas.closest("a,button") || canvas.parentElement;
    host?.addEventListener("mouseenter", redraw);
    host?.addEventListener("mouseleave", redraw);
    host?.addEventListener("focus", redraw);
    host?.addEventListener("blur", redraw);
    window.addEventListener("resize", draw);

    const observer = new MutationObserver(draw);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      host?.removeEventListener("mouseenter", redraw);
      host?.removeEventListener("mouseleave", redraw);
      host?.removeEventListener("focus", redraw);
      host?.removeEventListener("blur", redraw);
      window.removeEventListener("resize", draw);
      observer.disconnect();
    };
  }, [data]);

  return <canvas ref={ref} className={`obf-text ${className}`} aria-hidden="true" />;
}

function Obf({ d, kind = "url", className, children, ...rest }) {
  const onClick = (e) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    const raw = dec(d);
    if (!raw) return;
    if (kind === "mail") window.location.href = "mailto:" + raw;
    else if (kind === "tel") window.location.href = "tel:" + raw;
    else window.open(raw, "_blank", "noopener,noreferrer");
  };
  return (
    <a href="#contact" className={className} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}

/* ─────────── icons ─────────── */

const ArrowUR = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

/* ─────────── illustrations ─────────── */

function HeroIllustration() {
  const ref = useRef(null);

  // Smooth mouse parallax — tracks mouse anywhere on the page and lerps
  // the rotation each frame for buttery motion (no per-event jumps).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let raf = 0;
    let alive = true;

    const tick = () => {
      if (!alive) return;
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      el.style.setProperty("--mx", currentX.toFixed(3));
      el.style.setProperty("--my", currentY.toFixed(3));
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      // Measure from the illustration's center, but listen globally so
      // the parallax responds to mouse anywhere in the viewport.
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      // Normalize to roughly [-1, 1] within viewport range
      const nx = (e.clientX - cx) / (window.innerWidth * 0.5);
      const ny = (e.clientY - cy) / (window.innerHeight * 0.5);
      // Clamp + multiply to degrees
      const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
      targetX = clamp(nx, -1, 1) * 3.5;   // yaw  ±3.5°
      targetY = clamp(ny, -1, 1) * -2.5;  // pitch ±2.5°
    };

    const onLeave = () => { targetX = 0; targetY = 0; };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="illu-stack" ref={ref}>

        {/* main browser mockup — represents a contract / document editor */}
        <div className="illu-card illu-browser">
          <div className="illu-browser-chrome">
            <div className="illu-browser-dots"><span /><span /><span /></div>
            <div className="illu-browser-url">workspace / agreement-04.md</div>
          </div>
          <div className="illu-browser-body">
            <div className="illu-doc">
              <div className="illu-doc-title">Service Agreement</div>
              <div className="illu-doc-line w-95" />
              <div className="illu-doc-line w-80" />
              <div className="illu-doc-line highlight w-70" />
              <div className="illu-doc-line w-60" />
              <div className="illu-doc-line w-50" />
              <div className="illu-doc-comment">AA · Loop in legal here</div>
            </div>
            <div className="illu-doc-sidebar">
              <div className="sb active" />
              <div className="sb" />
              <div className="sb" />
              <div className="sb" />
              <div className="sb" />
            </div>
          </div>
        </div>

        {/* chart card — top right */}
        <div className="illu-card illu-chart">
          <div className="illu-chart-body">
            <div className="illu-chart-head">
              <span className="label">Shipped / week</span>
              <span className="value">+24</span>
            </div>
            <div className="illu-chart-bars">
              <div className="b" style={{ height: "45%" }} />
              <div className="b" style={{ height: "60%" }} />
              <div className="b tall" style={{ height: "88%" }} />
              <div className="b" style={{ height: "50%" }} />
              <div className="b" style={{ height: "72%" }} />
              <div className="b tall" style={{ height: "95%" }} />
              <div className="b" style={{ height: "65%" }} />
            </div>
            <div className="illu-chart-foot">
              <span>Mon</span><span>Sun</span>
            </div>
          </div>
        </div>

        {/* chat card — bottom left */}
        <div className="illu-card illu-chat">
          <div className="illu-chat-body">
            <div className="illu-chat-msg in">/sticker fox in space</div>
            <div className="illu-chat-msg out">cooking →</div>
            <div className="illu-chat-typing">
              <span className="d" /><span className="d" /><span className="d" />
            </div>
          </div>
        </div>

        {/* floating metric pills */}
        <div className="illu-pill illu-pill-1">
          <div className="illu-pill-icon">a</div>
          <div className="illu-pill-text">
            <span className="illu-pill-value">8K / mo</span>
            <span className="illu-pill-label">Contracts shipped</span>
          </div>
        </div>
        <div className="illu-pill illu-pill-2">
          <div className="illu-pill-icon" style={{ background: "linear-gradient(135deg, #B25CFF, #5C9CFF)", fontFamily: "var(--font-sans)", fontStyle: "normal", fontSize: 11, fontWeight: 600 }}>1M</div>
          <div className="illu-pill-text">
            <span className="illu-pill-value">1M+ reads</span>
            <span className="illu-pill-label">Field notes</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function NowMockup() {
  return (
    <div className="now-mockup" aria-hidden="true">
      <div className="now-mockup-bar">
        <div className="dots"><span /><span /><span /></div>
        <div className="tab">salaryguide.app / dashboard</div>
      </div>
      <div className="now-mockup-body">
        <div className="now-mockup-head">
          <div>
            <div className="now-mockup-num">$112,400</div>
            <div className="now-mockup-num-sub">Median · Paid Media</div>
          </div>
          <div className="now-mockup-delta">↗ +6.2%</div>
        </div>
        <div className="now-mockup-chart">
          <div className="b" style={{ height: "40%" }} />
          <div className="b" style={{ height: "55%" }} />
          <div className="b" style={{ height: "48%" }} />
          <div className="b hi" style={{ height: "72%" }} />
          <div className="b hi" style={{ height: "65%" }} />
          <div className="b" style={{ height: "58%" }} />
          <div className="b hi" style={{ height: "82%" }} />
          <div className="b hi" style={{ height: "88%" }} />
          <div className="b hi" style={{ height: "78%" }} />
          <div className="b" style={{ height: "62%" }} />
          <div className="b hi" style={{ height: "92%" }} />
          <div className="b hi" style={{ height: "100%" }} />
        </div>
        <div className="now-mockup-rows">
          <div className="now-mockup-row">
            <div className="av acc" />
            <div className="lbl" style={{ width: "70%" }} />
            <div className="pill">New York</div>
          </div>
          <div className="now-mockup-row">
            <div className="av acc2" />
            <div className="lbl" style={{ width: "55%" }} />
            <div className="pill">Austin</div>
          </div>
          <div className="now-mockup-row">
            <div className="av" />
            <div className="lbl" style={{ width: "62%" }} />
            <div className="pill">San Francisco</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkIllu({ kind }) {
  if (kind === "juro") {
    return (
      <div className="work-illu work-illu-juro" aria-hidden="true">
        <div className="ln t" />
        <div className="ln w-90" />
        <div className="ln w-70" />
        <div className="ln h" />
        <div className="ln w-50" />
        <div className="comment">▸ Comment by AA</div>
      </div>
    );
  }
  if (kind === "ancor") {
    return (
      <div className="work-illu work-illu-ancor" aria-hidden="true">
        <div className="row">
          <div className="av a" />
          <div className="lbl w-80" />
          <div className="tag">SR</div>
        </div>
        <div className="row">
          <div className="av b" />
          <div className="lbl w-60" />
          <div className="tag">JR</div>
        </div>
        <div className="row">
          <div className="av" />
          <div className="lbl w-80" />
          <div className="tag">MID</div>
        </div>
        <div className="row">
          <div className="av a" />
          <div className="lbl w-60" />
          <div className="tag">SR</div>
        </div>
      </div>
    );
  }
  return null;
}

/* ─────────── chrome ─────────── */

function Chrome({ theme, setTheme }) {
  const active = useActiveSection(["hero", ...NAV.map(n => n.id)]);
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

/* ─────────── hero ─────────── */

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="hero-grid" aria-hidden="true" />

      <div className="shell hero-main">
        <div className="hero-text">
          <h1 className="hero-headline">
            <SplitWords text="Engineering" delay={150} />{" "}
            <SplitWords text="things" delay={350} /><br/>
            <span className="hero-static-line">that last.</span>
          </h1>

          <Reveal delay={1000} className="lead">
            Senior software engineer, six years in. Real-time, document-heavy systems for teams that care about the craft of shipping.
          </Reveal>

          <Reveal delay={1200} className="hero-row">
            <button className="btn" onClick={() => scrollToId("projects")}>
              <span>See selected work</span>
              <span className="arr"><ArrowUR size={13} /></span>
            </button>
            <button className="btn-ghost" onClick={() => scrollToId("now")}>
              What I'm building now
            </button>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <HeroIllustration />
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── marquee strip ─────────── */

function Strip() {
  const doubled = useMemo(() => [...STRIP, ...STRIP], []);
  return (
    <div className="strip">
      <div className="strip-frame">
        <div className="strip-track">
          {doubled.map((s, i) => (
            <span className="strip-item" key={i}>
              <em>{s}</em>
              <span className="sparkle">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────── section head ─────────── */

function SecHead({ num, kicker, title, meta }) {
  return (
    <Reveal>
      <div className="sec-head">
        <div className="sec-head-title">
          <div className="eyebrow"><span className="dot" /><span className="num">{num}</span> {kicker}</div>
          <h2 className="h2" style={{ marginTop: 20 }}>{title}</h2>
        </div>
        <div className="sec-head-meta">
          {meta.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </Reveal>
  );
}

/* ─────────── now ─────────── */

function Now() {
  return (
    <section id="now">
      <div className="shell">
        <SecHead
          num="01"
          kicker="Currently"
          title={<><em>Now</em> playing.</>}
          meta={[<span className="num">01 / 05</span>, "In motion"]}
        />

        <div className="now-wrap">
          <Reveal delay={100}>
            <div className="card card-feature">
              <div className="now-head">
                <div className="now-status">
                  <span className="dot" />{CURRENT.status}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>
                  {CURRENT.period}
                </div>
              </div>

              <h3 className="now-title">
                {CURRENT.company} <em>/ {CURRENT.italic}</em>
              </h3>

              <div className="eyebrow" style={{ width: "fit-content" }}>
                <span className="dot" />{CURRENT.role}
              </div>

              <p className="now-blurb">{CURRENT.blurb}</p>

              <div className="now-stack">
                {CURRENT.stack.map(s => <span key={s}>{s}</span>)}
              </div>

              <div className="now-meta">
                {CURRENT.meta.map(m => (
                  <span key={m.k}><span className="k">{m.k}</span>{m.v}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <NowMockup />
          </Reveal>
        </div>

        <Reveal delay={300} style={{ marginTop: 20 }}>
          <div className="shipped-grid">
            <div className="shipped-head">
              <h4>Shipped at SalaryGuide</h4>
              <span className="shipped-sub">Four product surfaces, one rebuild</span>
            </div>
            <div className="shipped-list">
              {CURRENT.shipped.map((s, i) => (
                <div className="shipped-item" key={i}>
                  <div className="shipped-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="shipped-k">{s.k}</div>
                  <div className="shipped-v">{s.v}</div>
                  <div className="shipped-d">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── work / past lives ─────────── */

function Work() {
  return (
    <section id="work">
      <div className="shell">
        <SecHead
          num="02"
          kicker="Background"
          title="Previously."
          meta={[<span className="num">6+ years</span>, "Two companies"]}
        />

        <div className="work-stack">
          {TIMELINE.map((it, i) => (
            <Reveal delay={i * 100} key={it.co}>
              <article className="work-card">
                <div className="work-grid">
                  <div className="work-year">
                    <span>{it.year}</span>
                    <span className="badge">{it.badge}</span>
                  </div>
                  <div className="work-body">
                    <div className="work-co">
                      {it.co}
                      <em>{it.coNote}</em>
                    </div>
                    <div className="work-role">{it.role}</div>
                    <p className="work-desc">{it.desc}</p>
                    <div className="work-meta">
                      {it.meta.map(m => (
                        <span key={m.k}><span className="k">{m.k}</span>{m.v}</span>
                      ))}
                    </div>
                  </div>
                  <div className="work-arr">
                    <ArrowUR size={16} />
                  </div>
                </div>
                <WorkIllu kind={it.illu} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── project preview illustrations ─────────── */

function ProjectPreview({ kind }) {
  if (kind === "bot") {
    return (
      <div className="proj-preview preview-bot">
        <div className="bubbles">
          <div className="bubble user">/sticker a fox in space</div>
          <div className="bubble bot">Generating your pack...</div>
          <div className="stickers">
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
            <div className="sticker" />
          </div>
        </div>
      </div>
    );
  }
  if (kind === "ui") {
    return (
      <div className="proj-preview preview-ui">
        <div className="ui-window">
          <div className="ui-row">
            <div className="ui-circle" />
            <div className="ui-bars">
              <div className="ui-bar long" />
              <div className="ui-bar short" />
            </div>
          </div>
          <div className="ui-input">email@domain</div>
          <div className="ui-btn">Continue</div>
        </div>
      </div>
    );
  }
  if (kind === "msg") {
    return (
      <div className="proj-preview preview-msg">
        <div className="conv">
          <div className="msg in">Hey, you online?</div>
          <div className="msg out">Yeah, what's up <span className="check">✓✓</span></div>
          <div className="msg in">Sent the docs</div>
          <div className="typing">
            <span className="d" /><span className="d" /><span className="d" />
          </div>
        </div>
      </div>
    );
  }
  return null;
}

/* ─────────── projects ─────────── */

function Projects() {
  return (
    <section id="projects">
      <div className="shell">
        <SecHead
          num="03"
          kicker="Shipped"
          title={<>Nights & <em>weekends.</em></>}
          meta={[<span className="num">03 projects</span>, "Selected"]}
        />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <Reveal delay={i * 120} key={p.title}>
              <a className="proj-card" href={p.href} target="_blank" rel="noopener noreferrer">
                <div className="proj-preview-wrap">
                  <ProjectPreview kind={p.preview} />
                </div>
                <div className="proj-body">
                  <div className="proj-tag"><span className="dot" />{p.tag}</div>
                  <div className="proj-name">
                    <h3>{p.title} <em>{p.italic}</em></h3>
                    <span className="proj-arr"><ArrowUR size={14} /></span>
                  </div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-stack">
                    {p.stack.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── writing ─────────── */

function Writing() {
  return (
    <section id="writing">
      <div className="shell">
        <SecHead
          num="04"
          kicker="Field notes"
          title={<>Short thoughts. <em>Loud</em> opinions.</>}
          meta={[<span className="num">1.1M+ reads</span>, "On LinkedIn"]}
        />

        <div className="write-grid">
          {WRITING.map((w, i) => (
            <Reveal delay={i * 120} key={w.title}>
              <a className="write-card" href={w.href} target="_blank" rel="noopener noreferrer">
                <div className="write-head">
                  <span className="write-num">{w.num}</span>
                  <span className="write-arr"><ArrowUR size={14} /></span>
                </div>
                <h3 className="write-title">{w.title}<em>{w.italic}</em></h3>
                <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.55, flex: 1 }}>{w.blurb}</p>
                <div className="write-foot">
                  <span>{w.meta}</span>
                  <span className="views"><span className="dot" />{w.views}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── contact banner ─────────── */

function Contact() {
  return (
    <section id="contact" style={{ paddingTop: "clamp(40px, 6vh, 80px)" }}>
      <Reveal>
        <div className="cta-banner">
          <div className="cta-eyebrow">
            <span className="dot" />
            <span>05 / Index · Get in touch</span>
          </div>
          <h2 className="cta-title">
            Let's build <em>something</em><br/>
            worth shipping.
          </h2>
          <div className="cta-actions">
            <Obf className="btn" d={CONTACT.email} kind="mail">
              <ObfText data={CONTACT.email} />
              <span className="arr"><ArrowUR size={13} /></span>
            </Obf>
            <Obf className="btn-ghost" d={CONTACT.linkedinUrl}>
              Connect on LinkedIn
            </Obf>
          </div>

          <div className="cta-directory">
            {DIRECTORY.map(item => (
              <Obf
                key={item.k}
                d={item.d}
                kind={item.kind || "url"}
                className="dir-row"
              >
                <span className="dir-k">{item.k}</span>
                <span className="dir-v">
                  <ObfText data={item.v} />
                  <ArrowUR size={11} />
                </span>
              </Obf>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────── footer ─────────── */

function Footer() {
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
        <span className="right">Senior Fullstack Engineer</span>
      </div>
    </footer>
  );
}

/* ─────────── sticky CTA ─────────── */

function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight || 800;
      const contactEl = document.getElementById("contact");
      const contactTop = contactEl ? contactEl.getBoundingClientRect().top : Infinity;
      // show after scrolling past hero, hide when contact banner is near
      setShow(window.scrollY > vh * 0.6 && contactTop > vh * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`sticky-cta ${show ? "show" : ""}`}
      onClick={() => scrollToId("contact")}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <span>Get in touch</span>
      <span className="arr"><ArrowUR size={13} /></span>
    </button>
  );
}

/* ─────────── tweaks ─────────── */

const ACCENT_OPTIONS = [
  ["#FFB259", "#FF6B4A", "#FF3D7F", "#B25CFF"], // sunset (default)
  ["#7FE6FF", "#5C9CFF", "#7C5CFF", "#FF6BD0"], // electric
  ["#7CFFB6", "#5CFFE1", "#5CCFFF", "#7C8DFF"], // aurora
  ["#FFE066", "#FF9F45", "#FF5C8A", "#A055FF"], // candy
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "palette": ["#FFB259", "#FF6B4A", "#FF3D7F", "#B25CFF"],
  "rotator": true
}/*EDITMODE-END*/;

/* ─────────── app ─────────── */

function App() {
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
      <div className="progress" style={{ "--p": progress + "%" }} aria-hidden="true" />

      <Chrome theme={t.theme} setTheme={v => setTweak("theme", v)} />

      <main>
        <Hero />
        <Strip />
        <Now />
        <Work />
        <Projects />
        <Writing />
        <Contact />
      </main>

      <Footer />

      <StickyCTA />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={["dark", "paper"]}
          onChange={v => setTweak("theme", v)}
        />
        <TweakSection label="Palette" />
        <TweakColor
          label="Accent gradient"
          value={t.palette}
          options={ACCENT_OPTIONS}
          onChange={v => setTweak("palette", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
