function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef,
  useMemo
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
  label: "Contact"
}];
const ROTATING_WORDS = ["load-bearing code", "production scale", "the database", "real users"];
const CURRENT = {
  status: "Live now",
  role: "Senior Fullstack Engineer",
  company: "SalaryGuide",
  italic: "current",
  period: "2025 to present",
  blurb: "Took SalaryGuide from a static salary lookup to a full job-search product in a year. 500K jobs ingested, a paid tier launched, an entire AI-assisted apply flow shipped. The kind of work where nothing is the visible part until everything is",
  stack: ["TypeScript", "Next.js", "Node", "PostgreSQL", "Stripe", "AI / LLM"],
  shipped: [{
    k: "Job matching",
    v: "75K+ matches · 8K+ runs",
    desc: "A resume and goals, ranked into recommendations. The engine that turns intent into the right shortlist."
  }, {
    k: "Apply kit",
    v: "1K+ resume sessions",
    desc: "Upload a resume, pick a job, get a tailored resume, outreach copy, and concrete next steps."
  }, {
    k: "Company data layer",
    v: "100K+ enrichments · 58K+ insights",
    desc: "Hiring signals, people data, and company context. The backing layer behind every job page."
  }, {
    k: "Paid Edge layer",
    v: "Stripe · paywalls · KPI",
    desc: "Pricing, checkout, paywalls, coupons, dashboards, and KPI reports."
  }],
  meta: [{
    k: "Scale",
    v: "500K+ jobs"
  }, {
    k: "Role",
    v: "Fullstack"
  }]
};
const TIMELINE = [{
  year: "2023 / 2025",
  badge: "2 years",
  co: "Juro",
  coNote: "LegalTech",
  role: "Senior Software Engineer",
  desc: "Contract automation platform. Built real-time collaboration on legal documents and the workflow primitives behind 8,000+ contracts moving through the product each month.",
  illu: "juro",
  meta: [{
    k: "Scale",
    v: "8K contracts/mo"
  }, {
    k: "Owned",
    v: "Editor + Workflow"
  }, {
    k: "Team",
    v: "Mentored 2 engineers"
  }]
}, {
  year: "2019 / 2023",
  badge: "4 years",
  co: "Ancor",
  coNote: "Enterprise HR",
  role: "Software Engineer",
  desc: "Full-stack work on a staffing platform serving 1,000+ concurrent HR professionals. Designed the API surface, wrote the migrations, drew the dashboards. The kind of breadth only a small team gives you.",
  illu: "ancor",
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
  tag: "AI · Telegram",
  title: "StickIO Bot",
  italic: "telegram",
  desc: "A Telegram bot that turns prompts into vibrant sticker packs. Image processing pipeline, generation queue, and a UX that hides all of it behind one chat message.",
  stack: ["Node.js", "NestJS", "AI pipeline"],
  href: "https://t.me/stickio_bot",
  preview: "bot"
}, {
  tag: "Open Source",
  title: "Headless UI",
  italic: "for React",
  desc: "Production-ready headless components for React. Accessible by default, unstyled by intent, zero runtime dependencies. Primitives you'd want to copy/paste, but you don't have to.",
  stack: ["React", "TypeScript", "A11y"],
  href: "https://github.com/arslanov-artur/react-headless-ui-collection",
  preview: "ui"
}, {
  tag: "PWA",
  title: "Messenger",
  italic: "offline-first",
  desc: "A Progressive Web App messenger with offline sync, push notifications, and end-to-end encryption. WebSockets when online, IndexedDB when the metro goes underground.",
  stack: ["PWA", "WebSockets", "E2E"],
  href: "https://github.com/arslanov-artur/messenger-pwa",
  preview: "msg"
}];
const WRITING = [{
  num: "N°01",
  title: "Your tech stack",
  italic: " doesn't matter.",
  blurb: "If your users can't tell the difference between your stack and any other, neither should your hiring page.",
  meta: "LinkedIn · 2025",
  views: "500k views",
  href: "https://www.linkedin.com/posts/artur-arslanov_your-tech-stack-doesnt-matter-your-users-activity-7359454836905455616-AvJF",
  topic: "stack"
}, {
  num: "N°02",
  title: "The myth of the",
  italic: " 10x developer.",
  blurb: "I met a 10x developer once. They weren't faster. They were just clearer about what not to build.",
  meta: "LinkedIn · 2025",
  views: "200k views",
  href: "https://www.linkedin.com/posts/artur-arslanov_the-myth-of-the-10x-developer-met-a-10x-activity-7349791548181549056-WR5O",
  topic: "tenx"
}];
const CONTACT_KEY = String.fromCharCode(115, 105, 116, 101, 45, 107, 101, 121, 45, 50, 48, 50, 54);
const CONTACT = {
  email: [18, 27, 0, 13, 88, 25, 75, 24, 95, 65, 92, 83, 88, 28, 6, 2, 37, 74, 6, 4, 16, 65, 28, 83, 93, 91],
  linkedinUrl: [27, 29, 0, 21, 94, 81, 74, 86, 65, 91, 94, 89, 83, 23, 0, 26, 75, 78, 4, 8, 86, 68, 92, 31, 83, 68, 7, 28, 6, 72, 76, 25, 22, 21, 76, 92, 95, 68],
  linkedinText: [26, 7, 91, 4, 95, 31, 16, 11, 0, 83, 66, 65, 90, 18, 7, 27, 19],
  githubUrl: [27, 29, 0, 21, 94, 81, 74, 86, 74, 91, 68, 90, 67, 17, 71, 23, 10, 64, 68, 4, 11, 94, 94, 81, 92, 89, 5, 68, 21, 23, 89, 30, 23],
  githubText: [51, 8, 6, 22, 65, 10, 11, 22, 91, 31, 81, 64, 66, 6, 27],
  telegramUrl: [27, 29, 0, 21, 94, 81, 74, 86, 89, 28, 93, 87, 25, 18, 27, 0, 16, 95, 13, 22, 28],
  telegramText: [51, 8, 6, 17, 88, 25, 3, 10, 72],
  channelUrl: [27, 29, 0, 21, 94, 81, 74, 86, 89, 28, 93, 87, 25, 25, 26, 43, 4, 95, 31, 13, 12, 95],
  channelText: [7, 71, 25, 0, 2, 1, 22, 38, 76, 64, 68, 90, 67, 1]
};
const DIRECTORY = [{
  k: "Email",
  d: CONTACT.email,
  v: CONTACT.email,
  kind: "mail"
}, {
  k: "LinkedIn",
  d: CONTACT.linkedinUrl,
  v: CONTACT.linkedinText
}, {
  k: "GitHub",
  d: CONTACT.githubUrl,
  v: CONTACT.githubText
}, {
  k: "Telegram",
  d: CONTACT.telegramUrl,
  v: CONTACT.telegramText
}, {
  k: "Channel",
  d: CONTACT.channelUrl,
  v: CONTACT.channelText
}];
const STRIP = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Real-time collaboration", "Document automation", "API architecture", "Performance budgets", "TypeScript end-to-end"];
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
      "--delay": `${delay}ms`,
      ...(rest.style || {})
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
  delay = 0
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return React.createElement("span", {
    ref: ref,
    className: `mask ${inView ? "in" : ""}`,
    style: {
      "--delay": `${delay}ms`
    }
  }, React.createElement("span", null, children));
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
const dec = codes => {
  try {
    return codes.map((n, i) => String.fromCharCode(n ^ CONTACT_KEY.charCodeAt(i % CONTACT_KEY.length))).join("");
  } catch {
    return "";
  }
};
function ObfText({
  data,
  className = ""
}) {
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
    const redraw = () => {
      window.requestAnimationFrame(draw);
      window.setTimeout(draw, 80);
      window.setTimeout(draw, 360);
    };
    draw();
    document.fonts?.ready?.then(draw);
    const host = canvas.closest("a,button") || canvas.parentElement;
    host?.addEventListener("mouseenter", redraw);
    host?.addEventListener("mouseleave", redraw);
    host?.addEventListener("focus", redraw);
    host?.addEventListener("blur", redraw);
    host?.addEventListener("transitionend", redraw);
    window.addEventListener("resize", draw);
    const observer = new MutationObserver(redraw);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"]
    });
    return () => {
      host?.removeEventListener("mouseenter", redraw);
      host?.removeEventListener("mouseleave", redraw);
      host?.removeEventListener("focus", redraw);
      host?.removeEventListener("blur", redraw);
      host?.removeEventListener("transitionend", redraw);
      window.removeEventListener("resize", draw);
      observer.disconnect();
    };
  }, [data]);
  return React.createElement("canvas", {
    ref: ref,
    className: `obf-text ${className}`,
    "aria-hidden": "true"
  });
}
function Obf({
  d,
  kind = "url",
  className,
  children,
  ...rest
}) {
  const onClick = e => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    const raw = dec(d);
    if (!raw) return;
    if (kind === "mail") window.location.href = "mailto:" + raw;else if (kind === "tel") window.location.href = "tel:" + raw;else window.open(raw, "_blank", "noopener,noreferrer");
  };
  return React.createElement("a", _extends({
    href: "#contact",
    className: className,
    onClick: onClick
  }, rest), children);
}
const ArrowUR = ({
  size = 14
}) => React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, React.createElement("path", {
  d: "M7 17L17 7"
}), React.createElement("path", {
  d: "M7 7h10v10"
}));
function HeroIllustration() {
  return React.createElement("div", {
    className: "hero-illustration",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "illu-stack"
  }, React.createElement("div", {
    className: "illu-card illu-browser"
  }, React.createElement("div", {
    className: "illu-browser-chrome"
  }, React.createElement("div", {
    className: "illu-browser-dots"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement("div", {
    className: "illu-browser-url"
  }, "workspace / agreement-04.md")), React.createElement("div", {
    className: "illu-browser-body"
  }, React.createElement("div", {
    className: "illu-doc"
  }, React.createElement("div", {
    className: "illu-doc-title"
  }, "Service Agreement"), React.createElement("div", {
    className: "illu-doc-line w-95"
  }), React.createElement("div", {
    className: "illu-doc-line w-80"
  }), React.createElement("div", {
    className: "illu-doc-line highlight w-70"
  }), React.createElement("div", {
    className: "illu-doc-line w-60"
  }), React.createElement("div", {
    className: "illu-doc-line w-50"
  }), React.createElement("div", {
    className: "illu-doc-comment"
  }, "AA \xB7 Loop in legal here")), React.createElement("div", {
    className: "illu-doc-sidebar"
  }, React.createElement("div", {
    className: "sb active"
  }), React.createElement("div", {
    className: "sb"
  }), React.createElement("div", {
    className: "sb"
  }), React.createElement("div", {
    className: "sb"
  }), React.createElement("div", {
    className: "sb"
  })))), React.createElement("div", {
    className: "illu-card illu-term"
  }, React.createElement("div", {
    className: "illu-term-bar"
  }, React.createElement("div", {
    className: "illu-browser-dots"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement("span", {
    className: "illu-term-title"
  }, "~ /deploy")), React.createElement("div", {
    className: "illu-term-body"
  }, React.createElement("div", {
    className: "tl"
  }, React.createElement("span", {
    className: "prompt"
  }, "$"), " git push origin ", React.createElement("span", {
    className: "hl"
  }, "main")), React.createElement("div", {
    className: "tl muted"
  }, "\u2192 building..."), React.createElement("div", {
    className: "tl muted"
  }, "\u2192 tests ", React.createElement("span", {
    className: "ok"
  }, "\u2713"), " 248 passed"), React.createElement("div", {
    className: "tl muted"
  }, "\u2192 bundle ", React.createElement("span", {
    className: "ok"
  }, "\u2713"), " 142kb gzip"), React.createElement("div", {
    className: "tl"
  }, React.createElement("span", {
    className: "prompt"
  }, "$"), " ", React.createElement("span", {
    className: "caret"
  })))), React.createElement("div", {
    className: "illu-pill illu-pill-1"
  }, React.createElement("div", {
    className: "illu-pill-icon"
  }, "a"), React.createElement("div", {
    className: "illu-pill-text"
  }, React.createElement("span", {
    className: "illu-pill-value"
  }, "8K / mo"), React.createElement("span", {
    className: "illu-pill-label"
  }, "Contracts shipped")))));
}
function NowMockup() {
  return React.createElement("div", {
    className: "now-mockup",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "now-mockup-bar"
  }, React.createElement("div", {
    className: "dots"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement("div", {
    className: "tab"
  }, "salaryguide.app / dashboard")), React.createElement("div", {
    className: "now-mockup-body"
  }, React.createElement("div", {
    className: "now-mockup-head"
  }, React.createElement("div", {
    className: "now-mockup-headline"
  }, React.createElement("div", {
    className: "now-mockup-num-wrap"
  }, React.createElement("span", {
    className: "now-mockup-currency"
  }, "$"), React.createElement("span", {
    className: "now-mockup-num"
  }, "112,400"), React.createElement("span", {
    className: "now-mockup-cursor"
  })), React.createElement("div", {
    className: "now-mockup-num-sub"
  }, "Median \xB7 Paid Media \xB7 NY")), React.createElement("div", {
    className: "now-mockup-delta"
  }, React.createElement("span", {
    className: "now-mockup-delta-arrow"
  }, "\u2197"), React.createElement("span", {
    className: "now-mockup-delta-num"
  }, "+6.2%"))), React.createElement("div", {
    className: "now-mockup-kpi"
  }, React.createElement("div", {
    className: "now-mockup-kpi-cell"
  }, React.createElement("span", {
    className: "k"
  }, "Jobs"), React.createElement("span", {
    className: "v"
  }, "500K+"), React.createElement("span", {
    className: "bar"
  }, React.createElement("span", {
    className: "fill f1"
  }))), React.createElement("div", {
    className: "now-mockup-kpi-cell"
  }, React.createElement("span", {
    className: "k"
  }, "Matches"), React.createElement("span", {
    className: "v"
  }, "75K"), React.createElement("span", {
    className: "bar"
  }, React.createElement("span", {
    className: "fill f2"
  }))), React.createElement("div", {
    className: "now-mockup-kpi-cell"
  }, React.createElement("span", {
    className: "k"
  }, "Resumes"), React.createElement("span", {
    className: "v"
  }, "1.2K"), React.createElement("span", {
    className: "bar"
  }, React.createElement("span", {
    className: "fill f3"
  })))), React.createElement("div", {
    className: "now-mockup-chart"
  }, React.createElement("div", {
    className: "b",
    style: {
      height: "40%"
    }
  }), React.createElement("div", {
    className: "b",
    style: {
      height: "55%"
    }
  }), React.createElement("div", {
    className: "b",
    style: {
      height: "48%"
    }
  }), React.createElement("div", {
    className: "b hi",
    style: {
      height: "72%"
    }
  }), React.createElement("div", {
    className: "b hi",
    style: {
      height: "65%"
    }
  }), React.createElement("div", {
    className: "b",
    style: {
      height: "58%"
    }
  }), React.createElement("div", {
    className: "b hi",
    style: {
      height: "82%"
    }
  }), React.createElement("div", {
    className: "b hi",
    style: {
      height: "88%"
    }
  }), React.createElement("div", {
    className: "b hi",
    style: {
      height: "78%"
    }
  }), React.createElement("div", {
    className: "b",
    style: {
      height: "62%"
    }
  }), React.createElement("div", {
    className: "b hi",
    style: {
      height: "92%"
    }
  }), React.createElement("div", {
    className: "b hi",
    style: {
      height: "100%"
    }
  })), React.createElement("div", {
    className: "now-mockup-rows"
  }, React.createElement("div", {
    className: "now-mockup-row r1"
  }, React.createElement("div", {
    className: "av acc"
  }), React.createElement("div", {
    className: "lbl",
    style: {
      width: "70%"
    }
  }), React.createElement("div", {
    className: "pill"
  }, "New York")), React.createElement("div", {
    className: "now-mockup-row r2"
  }, React.createElement("div", {
    className: "av acc2"
  }), React.createElement("div", {
    className: "lbl",
    style: {
      width: "55%"
    }
  }), React.createElement("div", {
    className: "pill"
  }, "Austin")), React.createElement("div", {
    className: "now-mockup-row r3"
  }, React.createElement("div", {
    className: "av"
  }), React.createElement("div", {
    className: "lbl",
    style: {
      width: "62%"
    }
  }), React.createElement("div", {
    className: "pill"
  }, "San Francisco")))));
}
function WorkIllu({
  kind
}) {
  if (kind === "juro") {
    return React.createElement("div", {
      className: "work-illu work-illu-juro",
      "aria-hidden": "true"
    }, React.createElement("div", {
      className: "ln t"
    }), React.createElement("div", {
      className: "ln w-90"
    }), React.createElement("div", {
      className: "ln w-70"
    }), React.createElement("div", {
      className: "ln h"
    }), React.createElement("div", {
      className: "ln w-50"
    }), React.createElement("div", {
      className: "comment"
    }, "Comment by AA"));
  }
  if (kind === "ancor") {
    return React.createElement("div", {
      className: "work-illu work-illu-ancor",
      "aria-hidden": "true"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "av a"
    }), React.createElement("div", {
      className: "lbl w-80"
    }), React.createElement("div", {
      className: "tag"
    }, "SR")), React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "av b"
    }), React.createElement("div", {
      className: "lbl w-60"
    }), React.createElement("div", {
      className: "tag"
    }, "JR")), React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "av"
    }), React.createElement("div", {
      className: "lbl w-80"
    }), React.createElement("div", {
      className: "tag"
    }, "MID")), React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "av a"
    }), React.createElement("div", {
      className: "lbl w-60"
    }), React.createElement("div", {
      className: "tag"
    }, "SR")));
  }
  return null;
}
const ACCENT_OPTIONS = [["#FFB259", "#FF6B4A", "#FF3D7F", "#B25CFF"], ["#7FE6FF", "#5C9CFF", "#7C5CFF", "#FF6BD0"], ["#7CFFB6", "#5CFFE1", "#5CCFFF", "#7C8DFF"], ["#FFE066", "#FF9F45", "#FF5C8A", "#A055FF"]];
function Swatch({
  colors
}) {
  return React.createElement("span", {
    className: "chrome-swatch",
    "aria-hidden": "true"
  }, colors.slice(0, 4).map((c, i) => React.createElement("span", {
    key: i,
    style: {
      background: c
    }
  })));
}
function ThemeButton({
  theme,
  setTheme
}) {
  const next = theme === "dark" ? "paper" : "dark";
  return React.createElement("button", {
    className: "chrome-icon-btn chrome-theme",
    onClick: () => setTheme(next),
    title: `Switch to ${next} mode`,
    "aria-label": `Switch to ${next} mode`
  }, React.createElement("span", {
    className: "chrome-theme-icon"
  }, theme === "dark" ? React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  })) : React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), React.createElement("path", {
    d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
  }))));
}
function PalettePicker({
  value,
  options,
  onChange
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDown = e => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const currentIndex = options.findIndex(o => o.join() === (value || []).join());
  return React.createElement("div", {
    className: "chrome-palette",
    ref: ref
  }, React.createElement("button", {
    className: "chrome-icon-btn chrome-palette-btn",
    onClick: () => setOpen(o => !o),
    "aria-label": "Color palette",
    "aria-expanded": open,
    title: "Color palette"
  }, React.createElement(Swatch, {
    colors: value || options[0]
  })), React.createElement("div", {
    className: `chrome-palette-menu ${open ? "open" : ""}`,
    role: "menu"
  }, options.map((opt, i) => React.createElement("button", {
    key: i,
    role: "menuitemradio",
    "aria-checked": i === currentIndex,
    className: `chrome-palette-opt ${i === currentIndex ? "active" : ""}`,
    onClick: () => {
      onChange(opt);
      setOpen(false);
    },
    title: ["Sunset", "Electric", "Aurora", "Candy"][i] || `Palette ${i + 1}`
  }, React.createElement(Swatch, {
    colors: opt
  })))));
}
function Chrome({
  theme,
  setTheme,
  palette,
  setPalette
}) {
  const active = useActiveSection(["hero", ...NAV.map(n => n.id)]);
  return React.createElement("header", {
    className: "chrome"
  }, React.createElement("div", {
    className: "chrome-logo"
  }, React.createElement("span", {
    className: "mark"
  }, "A"), React.createElement("span", null, "Arslanov")), React.createElement("nav", {
    className: "chrome-nav"
  }, NAV.map(n => React.createElement("button", {
    key: n.id,
    "data-active": active === n.id,
    onClick: () => scrollToId(n.id)
  }, React.createElement("span", {
    className: "num"
  }, n.num), React.createElement("span", null, n.label)))), React.createElement("div", {
    className: "chrome-controls"
  }, React.createElement(ThemeButton, {
    theme: theme,
    setTheme: setTheme
  }), React.createElement(PalettePicker, {
    value: palette,
    options: ACCENT_OPTIONS,
    onChange: setPalette
  })), React.createElement("button", {
    className: "chrome-cta",
    onClick: () => scrollToId("contact")
  }, React.createElement("span", null, "Get in touch"), React.createElement("span", {
    className: "arr"
  }, React.createElement(ArrowUR, {
    size: 11
  }))));
}
function Hero() {
  return React.createElement("section", {
    id: "hero",
    className: "hero"
  }, React.createElement("div", {
    className: "hero-bg",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "orb orb-1"
  }), React.createElement("div", {
    className: "orb orb-2"
  }), React.createElement("div", {
    className: "orb orb-3"
  })), React.createElement("div", {
    className: "hero-grid",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "shell hero-main"
  }, React.createElement("div", {
    className: "hero-text"
  }, React.createElement("h1", {
    className: "hero-headline"
  }, React.createElement(SplitWords, {
    text: "Where messy human workflow meets",
    delay: 150
  }), React.createElement("br", null), React.createElement("span", {
    className: "rotator"
  }, React.createElement("span", {
    className: "rotator-track"
  }, ROTATING_WORDS.map((w, i) => React.createElement("span", {
    key: i
  }, w)), React.createElement("span", null, ROTATING_WORDS[0])))), React.createElement(Reveal, {
    delay: 1000,
    className: "lead"
  }, "Senior FullStack Engineer. I work on the systems behind real-time, collaborative products. 6+ years across two B2B companies and a third I'm building from scratch"), React.createElement(Reveal, {
    delay: 1200,
    className: "hero-row"
  }, React.createElement("button", {
    className: "btn",
    onClick: () => scrollToId("projects")
  }, React.createElement("span", null, "See selected work"), React.createElement("span", {
    className: "arr"
  }, React.createElement(ArrowUR, {
    size: 13
  }))), React.createElement("button", {
    className: "btn-ghost",
    onClick: () => scrollToId("now")
  }, "What I'm building now"))), React.createElement(Reveal, {
    delay: 400
  }, React.createElement(HeroIllustration, null))));
}
function Strip() {
  const doubled = useMemo(() => [...STRIP, ...STRIP], []);
  return React.createElement("div", {
    className: "strip"
  }, React.createElement("div", {
    className: "strip-frame"
  }, React.createElement("div", {
    className: "strip-track"
  }, doubled.map((s, i) => React.createElement("span", {
    className: "strip-item",
    key: i
  }, React.createElement("em", null, s), React.createElement("span", {
    className: "sparkle"
  }, "\u2726"))))));
}
function SecHead({
  num,
  kicker,
  title,
  meta
}) {
  return React.createElement(Reveal, null, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", {
    className: "sec-head-title"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), React.createElement("span", {
    className: "num"
  }, num), " ", kicker), React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 20
    }
  }, title)), React.createElement("div", {
    className: "sec-head-meta"
  }, meta.map((m, i) => React.createElement("span", {
    key: i
  }, m)))));
}
function Now() {
  return React.createElement("section", {
    id: "now"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(SecHead, {
    num: "01",
    kicker: "Currently",
    title: React.createElement(React.Fragment, null, React.createElement("em", null, "Now"), " playing."),
    meta: [React.createElement("span", {
      className: "num"
    }, "01 / 05"), "In motion"]
  }), React.createElement("div", {
    className: "now-wrap"
  }, React.createElement(Reveal, {
    delay: 100
  }, React.createElement("div", {
    className: "card card-feature"
  }, React.createElement("div", {
    className: "now-head"
  }, React.createElement("div", {
    className: "now-status"
  }, React.createElement("span", {
    className: "dot"
  }), CURRENT.status), React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, CURRENT.period)), React.createElement("h3", {
    className: "now-title"
  }, CURRENT.company, " ", React.createElement("em", null, "/ ", CURRENT.italic)), React.createElement("div", {
    className: "eyebrow",
    style: {
      width: "fit-content"
    }
  }, React.createElement("span", {
    className: "dot"
  }), CURRENT.role), React.createElement("p", {
    className: "now-blurb"
  }, CURRENT.blurb), React.createElement("div", {
    className: "now-stack"
  }, CURRENT.stack.map(s => React.createElement("span", {
    key: s
  }, s))), React.createElement("div", {
    className: "now-meta"
  }, CURRENT.meta.map(m => React.createElement("span", {
    key: m.k
  }, React.createElement("span", {
    className: "k"
  }, m.k), m.v))))), React.createElement(Reveal, {
    delay: 200
  }, React.createElement(NowMockup, null))), React.createElement(Reveal, {
    delay: 300,
    style: {
      marginTop: 20
    }
  }, React.createElement("div", {
    className: "shipped-grid"
  }, React.createElement("div", {
    className: "shipped-head"
  }, React.createElement("h4", null, "Shipped at SalaryGuide"), React.createElement("span", {
    className: "shipped-sub"
  }, "Four product surfaces, one rebuild")), React.createElement("div", {
    className: "shipped-list"
  }, CURRENT.shipped.map((s, i) => React.createElement("div", {
    className: "shipped-item",
    key: i
  }, React.createElement("div", {
    className: "shipped-num"
  }, String(i + 1).padStart(2, "0")), React.createElement("div", {
    className: "shipped-k"
  }, s.k), React.createElement("div", {
    className: "shipped-v"
  }, s.v), React.createElement("div", {
    className: "shipped-d"
  }, s.desc))))))));
}
function Work() {
  return React.createElement("section", {
    id: "work"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(SecHead, {
    num: "02",
    kicker: "Background",
    title: "Previously.",
    meta: [React.createElement("span", {
      className: "num"
    }, "6+ years"), "Two companies"]
  }), React.createElement("div", {
    className: "work-stack"
  }, TIMELINE.map((it, i) => React.createElement(Reveal, {
    delay: i * 100,
    key: it.co
  }, React.createElement("article", {
    className: "work-card"
  }, React.createElement("div", {
    className: "work-grid"
  }, React.createElement("div", {
    className: "work-year"
  }, React.createElement("span", null, it.year), React.createElement("span", {
    className: "badge"
  }, it.badge)), React.createElement("div", {
    className: "work-body"
  }, React.createElement("div", {
    className: "work-co"
  }, it.co, React.createElement("em", null, it.coNote)), React.createElement("div", {
    className: "work-role"
  }, it.role), React.createElement("p", {
    className: "work-desc"
  }, it.desc), React.createElement("div", {
    className: "work-meta"
  }, it.meta.map(m => React.createElement("span", {
    key: m.k
  }, React.createElement("span", {
    className: "k"
  }, m.k), m.v))))), React.createElement(WorkIllu, {
    kind: it.illu
  })))))));
}
function ProjectPreview({
  kind
}) {
  if (kind === "bot") {
    return React.createElement("div", {
      className: "proj-preview preview-bot"
    }, React.createElement("div", {
      className: "bubbles"
    }, React.createElement("div", {
      className: "seq-row user b1"
    }, React.createElement("div", {
      className: "typing-bubble out"
    }, React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    })), React.createElement("div", {
      className: "bubble user"
    }, "/sticker fox in space")), React.createElement("div", {
      className: "seq-row bot b2"
    }, React.createElement("div", {
      className: "typing-bubble"
    }, React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    })), React.createElement("div", {
      className: "bubble bot"
    }, "Cooking up your pack ", React.createElement("span", {
      className: "dots-trail"
    }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)))), React.createElement("div", {
      className: "seq-row stickers-row b3"
    }, React.createElement("div", {
      className: "stickers"
    }, React.createElement("div", {
      className: "sticker s1"
    }, React.createElement("span", {
      className: "face"
    }, React.createElement("span", {
      className: "eye"
    }), React.createElement("span", {
      className: "eye r"
    }), React.createElement("span", {
      className: "mouth"
    }))), React.createElement("div", {
      className: "sticker s2"
    }, React.createElement("span", {
      className: "spark"
    }, "\u2726")), React.createElement("div", {
      className: "sticker s3"
    }, React.createElement("span", {
      className: "planet"
    })), React.createElement("div", {
      className: "sticker s4"
    }, React.createElement("span", {
      className: "spark s"
    }, "\u2726"))))));
  }
  if (kind === "ui") {
    return React.createElement("div", {
      className: "proj-preview preview-ui"
    }, React.createElement("div", {
      className: "ui-window"
    }, React.createElement("div", {
      className: "ui-window-bar"
    }, React.createElement("div", {
      className: "ui-window-dots"
    }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement("span", {
      className: "ui-window-title"
    }, "Sign in"), React.createElement("span", {
      className: "ui-window-x"
    }, "\xD7")), React.createElement("div", {
      className: "ui-tabs ui-step u1"
    }, React.createElement("span", {
      className: "ui-tab active"
    }, "Sign in"), React.createElement("span", {
      className: "ui-tab"
    }, "Register"), React.createElement("span", {
      className: "ui-tab-pill"
    })), React.createElement("div", {
      className: "ui-row ui-step u2"
    }, React.createElement("div", {
      className: "ui-circle"
    }), React.createElement("div", {
      className: "ui-bars"
    }, React.createElement("div", {
      className: "ui-bar long"
    }), React.createElement("div", {
      className: "ui-bar short"
    })), React.createElement("div", {
      className: "ui-toggle"
    }, React.createElement("span", {
      className: "ui-toggle-knob"
    }))), React.createElement("div", {
      className: "ui-input ui-step u3"
    }, React.createElement("span", {
      className: "ui-input-icon"
    }, "@"), React.createElement("span", {
      className: "ui-input-text"
    }), React.createElement("span", {
      className: "ui-input-caret"
    })), React.createElement("div", {
      className: "ui-input ui-pwd ui-step u4"
    }, React.createElement("span", {
      className: "ui-input-icon"
    }, "\u26BF"), React.createElement("span", {
      className: "ui-pwd-dots"
    }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement("span", {
      className: "ui-input-eye"
    }, "\u25CF")), React.createElement("div", {
      className: "ui-check-row ui-step u5"
    }, React.createElement("span", {
      className: "ui-checkbox"
    }, React.createElement("span", {
      className: "ui-check-mark"
    }, "\u2713")), React.createElement("span", {
      className: "ui-check-label"
    }, "Remember me"), React.createElement("span", {
      className: "ui-link"
    }, "Forgot?")), React.createElement("div", {
      className: "ui-btn ui-step u6"
    }, React.createElement("span", {
      className: "ui-btn-label"
    }, "Continue"), React.createElement("span", {
      className: "ui-btn-spin"
    }), React.createElement("span", {
      className: "ui-btn-check"
    }, "\u2713")), React.createElement("span", {
      className: "ui-cursor",
      "aria-hidden": "true"
    }, React.createElement("svg", {
      viewBox: "0 0 16 16",
      width: "13",
      height: "13",
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M2 2L8 14L9.5 9.5L14 8L2 2Z",
      stroke: "#fff",
      strokeWidth: "0.6",
      strokeLinejoin: "round"
    })))));
  }
  if (kind === "msg") {
    return React.createElement("div", {
      className: "proj-preview preview-msg"
    }, React.createElement("div", {
      className: "conv"
    }, React.createElement("div", {
      className: "seq-row in m1"
    }, React.createElement("div", {
      className: "typing-bubble"
    }, React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    })), React.createElement("div", {
      className: "msg in"
    }, "Hey, you online?")), React.createElement("div", {
      className: "seq-row out m2"
    }, React.createElement("div", {
      className: "typing-bubble out"
    }, React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    })), React.createElement("div", {
      className: "msg out"
    }, "Yeah, what's up ", React.createElement("span", {
      className: "check"
    }, "\u2713\u2713"))), React.createElement("div", {
      className: "seq-row in m3"
    }, React.createElement("div", {
      className: "typing-bubble"
    }, React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    })), React.createElement("div", {
      className: "msg in"
    }, "Sent the docs")), React.createElement("div", {
      className: "seq-row out m4 only-typing"
    }, React.createElement("div", {
      className: "typing-bubble out"
    }, React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    }), React.createElement("span", {
      className: "d"
    })))));
  }
  return null;
}
function Projects() {
  return React.createElement("section", {
    id: "projects"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(SecHead, {
    num: "03",
    kicker: "Shipped",
    title: React.createElement(React.Fragment, null, "Nights & ", React.createElement("em", null, "weekends.")),
    meta: [React.createElement("span", {
      className: "num"
    }, "03 projects"), "Selected"]
  }), React.createElement("div", {
    className: "projects-grid"
  }, PROJECTS.map((p, i) => React.createElement(Reveal, {
    delay: i * 120,
    key: p.title
  }, React.createElement("a", {
    className: "proj-card",
    href: p.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("div", {
    className: "proj-preview-wrap"
  }, React.createElement(ProjectPreview, {
    kind: p.preview
  })), React.createElement("div", {
    className: "proj-body"
  }, React.createElement("div", {
    className: "proj-tag"
  }, React.createElement("span", {
    className: "dot"
  }), p.tag), React.createElement("div", {
    className: "proj-name"
  }, React.createElement("h3", null, p.title, " ", React.createElement("em", null, p.italic)), React.createElement("span", {
    className: "proj-arr"
  }, React.createElement(ArrowUR, {
    size: 14
  }))), React.createElement("p", {
    className: "proj-desc"
  }, p.desc), React.createElement("div", {
    className: "proj-stack"
  }, p.stack.map(s => React.createElement("span", {
    key: s
  }, s))))))))));
}
function WriteIllu({
  topic
}) {
  if (topic === "stack") {
    return React.createElement("div", {
      className: "write-illu write-illu-stack",
      "aria-hidden": "true"
    }, React.createElement("div", {
      className: "ws-shelf"
    }, React.createElement("div", {
      className: "ws-card ws-c1"
    }, "React"), React.createElement("div", {
      className: "ws-card ws-c2"
    }, "Vue"), React.createElement("div", {
      className: "ws-card ws-c3"
    }, "Svelte"), React.createElement("div", {
      className: "ws-card ws-c4"
    }, "Solid"), React.createElement("div", {
      className: "ws-card ws-c5"
    }, "Angular")), React.createElement("div", {
      className: "ws-equation"
    }, React.createElement("span", {
      className: "ws-equals"
    }, "\u2261"), React.createElement("span", {
      className: "ws-result-text"
    }, "same product"), React.createElement("span", {
      className: "ws-result-arrow"
    }, "\u2192")));
  }
  if (topic === "tenx") {
    return React.createElement("div", {
      className: "write-illu write-illu-tenx",
      "aria-hidden": "true"
    }, React.createElement("div", {
      className: "wt-row"
    }, React.createElement("span", {
      className: "wt-label"
    }, "1\xD7"), React.createElement("span", {
      className: "wt-bar wt-b1"
    }, React.createElement("span", {
      className: "wt-bar-fill"
    }), React.createElement("span", {
      className: "wt-strike"
    }))), React.createElement("div", {
      className: "wt-row"
    }, React.createElement("span", {
      className: "wt-label"
    }, "1\xD7"), React.createElement("span", {
      className: "wt-bar wt-b2"
    }, React.createElement("span", {
      className: "wt-bar-fill"
    }), React.createElement("span", {
      className: "wt-strike"
    }))), React.createElement("div", {
      className: "wt-row"
    }, React.createElement("span", {
      className: "wt-label"
    }, "1\xD7"), React.createElement("span", {
      className: "wt-bar wt-b3"
    }, React.createElement("span", {
      className: "wt-bar-fill"
    }), React.createElement("span", {
      className: "wt-strike"
    }))), React.createElement("div", {
      className: "wt-row wt-hero"
    }, React.createElement("span", {
      className: "wt-label is-10x"
    }, "10\xD7"), React.createElement("span", {
      className: "wt-bar wt-b4"
    }, React.createElement("span", {
      className: "wt-bar-fill is-10x"
    })), React.createElement("span", {
      className: "wt-note"
    }, "ships less.")));
  }
  return null;
}
function Writing() {
  return React.createElement("section", {
    id: "writing"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement(SecHead, {
    num: "04",
    kicker: "Field notes",
    title: React.createElement(React.Fragment, null, React.createElement("span", {
      className: "line-keep"
    }, "Short thoughts."), React.createElement("br", null), React.createElement("span", {
      className: "line-keep"
    }, React.createElement("em", null, "Loud"), " opinions.")),
    meta: [React.createElement("span", {
      className: "num"
    }, "700k+ reads"), "On LinkedIn"]
  }), React.createElement("div", {
    className: "write-grid"
  }, WRITING.map((w, i) => React.createElement(Reveal, {
    delay: i * 120,
    key: w.title
  }, React.createElement("a", {
    className: "write-card",
    href: w.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("div", {
    className: "write-head"
  }, React.createElement("span", {
    className: "write-num"
  }, w.num), React.createElement("span", {
    className: "write-arr"
  }, React.createElement(ArrowUR, {
    size: 14
  }))), React.createElement("h3", {
    className: "write-title"
  }, w.title, React.createElement("em", null, w.italic)), React.createElement("p", {
    style: {
      color: "var(--text-dim)",
      fontSize: 15,
      lineHeight: 1.55,
      flex: 1
    }
  }, w.blurb), React.createElement(WriteIllu, {
    topic: w.topic
  }), React.createElement("div", {
    className: "write-foot"
  }, React.createElement("span", null, w.meta), React.createElement("span", {
    className: "views"
  }, React.createElement("span", {
    className: "dot"
  }), w.views))))))));
}
function Contact() {
  return React.createElement("section", {
    id: "contact",
    style: {
      paddingTop: "clamp(40px, 6vh, 80px)"
    }
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "cta-banner"
  }, React.createElement("div", {
    className: "cta-signal",
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "cta-signal-ring r1"
  }), React.createElement("span", {
    className: "cta-signal-ring r2"
  }), React.createElement("span", {
    className: "cta-signal-ring r3"
  }), React.createElement("span", {
    className: "cta-signal-core"
  })), React.createElement("div", {
    className: "cta-eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), React.createElement("span", null, "05 / Index \xB7 Get in touch")), React.createElement("h2", {
    className: "cta-title"
  }, "Let's build ", React.createElement("em", null, "something"), React.createElement("br", null), "worth shipping."), React.createElement("div", {
    className: "cta-actions"
  }, React.createElement(Obf, {
    className: "btn",
    d: CONTACT.email,
    kind: "mail"
  }, React.createElement(ObfText, {
    data: CONTACT.email
  }), React.createElement("span", {
    className: "arr"
  }, React.createElement(ArrowUR, {
    size: 13
  }))), React.createElement(Obf, {
    className: "btn-ghost",
    d: CONTACT.linkedinUrl
  }, "Connect on LinkedIn")), React.createElement("div", {
    className: "cta-directory"
  }, DIRECTORY.map(item => React.createElement(Obf, {
    key: item.k,
    d: item.d,
    kind: item.kind || "url",
    className: "dir-row"
  }, React.createElement("span", {
    className: "dir-k"
  }, item.k), React.createElement("span", {
    className: "dir-v"
  }, React.createElement(ObfText, {
    data: item.v
  }), React.createElement(ArrowUR, {
    size: 11
  }))))))));
}
function Footer() {
  const year = new Date().getFullYear();
  return React.createElement("footer", {
    className: "foot-wrap"
  }, React.createElement("div", {
    className: "foot-mark-wrap",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "foot-mark-track"
  }, React.createElement("span", {
    className: "foot-mark"
  }, "DEVELOPER.EXPERT"), React.createElement("span", {
    className: "foot-mark-sep"
  }, "\u2726"), React.createElement("span", {
    className: "foot-mark"
  }, "DEVELOPER.EXPERT"), React.createElement("span", {
    className: "foot-mark-sep"
  }, "\u2726"), React.createElement("span", {
    className: "foot-mark"
  }, "DEVELOPER.EXPERT"), React.createElement("span", {
    className: "foot-mark-sep"
  }, "\u2726"), React.createElement("span", {
    className: "foot-mark"
  }, "DEVELOPER.EXPERT"), React.createElement("span", {
    className: "foot-mark-sep"
  }, "\u2726"))), React.createElement("div", {
    className: "foot-bar"
  }, React.createElement("span", null, "\xA9 ", year, " \xB7 Artur Arslanov"), React.createElement("span", {
    className: "center"
  }, "Built with care, not noise."), React.createElement("span", {
    className: "right"
  }, "Senior Fullstack Engineer")));
}
function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight || 800;
      const contactEl = document.getElementById("contact");
      const contactTop = contactEl ? contactEl.getBoundingClientRect().top : Infinity;
      setShow(window.scrollY > vh * 0.6 && contactTop > vh * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return React.createElement("button", {
    className: `sticky-cta ${show ? "show" : ""}`,
    onClick: () => scrollToId("contact"),
    "aria-hidden": !show,
    tabIndex: show ? 0 : -1
  }, React.createElement("span", null, "Get in touch"), React.createElement("span", {
    className: "arr"
  }, React.createElement(ArrowUR, {
    size: 13
  })));
}
const TWEAK_DEFAULTS = {
  "theme": "dark",
  "palette": ["#FFB259", "#FF6B4A", "#FF3D7F", "#B25CFF"],
  "rotator": true
};
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
    document.documentElement.style.setProperty("--accent-grad", `linear-gradient(120deg, ${c1} 0%, ${c2} 35%, ${c3} 75%, ${c4} 100%)`);
  }, [t.palette]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "progress",
    style: {
      "--p": progress + "%"
    },
    "aria-hidden": "true"
  }), React.createElement(Chrome, {
    theme: t.theme,
    setTheme: v => setTweak("theme", v),
    palette: t.palette,
    setPalette: v => setTweak("palette", v)
  }), React.createElement("main", null, React.createElement(Hero, null), React.createElement(Strip, null), React.createElement(Now, null), React.createElement(Work, null), React.createElement(Projects, null), React.createElement(Writing, null), React.createElement(Contact, null)), React.createElement(Footer, null), React.createElement(StickyCTA, null));
}
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement(App, null));
