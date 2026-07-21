// ─────────── hero: FIG. 1 — patent-style drawing ───────────
// A monoline "patent filing" schematic of a machine that ships software.
// Ink is currentColor so the drawing re-inks itself per theme.
// Labels are real process stages — no invented metrics anywhere.

export function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <svg className="fig" viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ground line + soil ticks */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.45" strokeLinecap="round">
          <path d="M36 332 H612" />
          <path d="M60 332 l-9 9 M105 332 l-9 9 M150 332 l-9 9 M420 332 l-9 9 M465 332 l-9 9 M510 332 l-9 9 M555 332 l-9 9 M600 332 l-9 9" />
        </g>

        {/* plinth with section hatching */}
        <g stroke="currentColor" strokeWidth="1.3">
          <rect x="166" y="308" width="220" height="24" />
          <path
            strokeWidth="0.8"
            opacity="0.5"
            d="M170 331 l12 -22 M183 331 l12 -22 M196 331 l12 -22 M209 331 l12 -22 M222 331 l12 -22 M235 331 l12 -22 M248 331 l12 -22 M261 331 l12 -22 M274 331 l12 -22 M287 331 l12 -22 M300 331 l12 -22 M313 331 l12 -22 M326 331 l12 -22 M339 331 l12 -22 M352 331 l12 -22 M365 331 l12 -22"
          />
        </g>

        {/* machine body + corner bolts */}
        <g stroke="currentColor" strokeWidth="1.3">
          <rect x="176" y="148" width="200" height="160" rx="3" />
          <circle cx="188" cy="160" r="2.2" />
          <circle cx="364" cy="160" r="2.2" />
          <circle cx="188" cy="296" r="2.2" />
          <circle cx="364" cy="296" r="2.2" />
        </g>

        {/* 10 — intake funnel */}
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M204 70 H272 M204 70 L228 114 M272 70 L248 114 M228 114 V148 M248 114 V148" />
        </g>

        {/* falling block (spec goes in) */}
        <rect className="fig-drop" x="232" y="34" width="12" height="12" stroke="currentColor" strokeWidth="1.3" />

        {/* 20 — gears, dashed per hidden-line convention */}
        <g className="fig-gear fig-gear-a" stroke="currentColor" strokeWidth="1.1" strokeDasharray="4 3">
          <circle cx="240" cy="214" r="32" />
          <circle cx="240" cy="214" r="24" />
          <circle cx="240" cy="214" r="5" strokeDasharray="none" />
          <path d="M272 214 h6 M267.7 198 l5.2 -3 M256 186.3 l3 -5.2 M240 182 v-6 M224 186.3 l-3 -5.2 M212.3 198 l-5.2 -3 M208 214 h-6 M212.3 230 l-5.2 3 M224 241.7 l-3 5.2 M240 246 v6 M256 241.7 l3 5.2 M267.7 230 l5.2 3" />
          <path strokeDasharray="none" d="M240 209 V190 M235.7 216.5 L219.2 226 M244.3 216.5 L260.8 226" />
        </g>
        <g className="fig-gear fig-gear-b" stroke="currentColor" strokeWidth="1.1" strokeDasharray="4 3">
          <circle cx="288" cy="248" r="22" />
          <circle cx="288" cy="248" r="15" />
          <circle cx="288" cy="248" r="4" strokeDasharray="none" />
          <path d="M310 248 h5 M305.8 235.1 l4 -3 M294.8 227.1 l1.5 -4.8 M281.2 227.1 l-1.5 -4.8 M270.2 235.1 l-4 -3 M266 248 h-5 M270.2 260.9 l-4 3 M281.2 268.9 l-1.5 4.8 M294.8 268.9 l1.5 4.8 M305.8 260.9 l4 3" />
        </g>

        {/* 30 — evals gauge */}
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M318 148 A22 22 0 0 1 362 148" />
          <path strokeWidth="1" d="M320.9 137 L325.3 139.5 M329 129 L331.5 133.3 M340 126 V131 M351 129 L348.5 133.3 M359.1 137 L354.7 139.5" />
          <path d="M318 148 H362" />
        </g>
        <g className="fig-needle" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M340 148 L344.4 131.6" />
        </g>
        <circle cx="340" cy="148" r="2.5" stroke="currentColor" strokeWidth="1.3" />

        {/* 50 — coin slot (Stripe) */}
        <g stroke="currentColor" strokeWidth="1.3">
          <rect x="346" y="192" width="5" height="18" rx="2" />
          <circle cx="398" cy="178" r="9" />
          <circle cx="398" cy="178" r="6" strokeWidth="1" />
          <path strokeWidth="1" strokeDasharray="3 4" d="M396 187 Q386 204 354 200" />
        </g>

        {/* outlet chute */}
        <path stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" d="M376 262 H402 M376 284 H402" />

        {/* 40 — conveyor */}
        <g stroke="currentColor" strokeWidth="1.3">
          <rect x="402" y="293" width="168" height="26" rx="13" />
          <circle cx="415" cy="306" r="9" />
          <path strokeWidth="1" d="M411 306 h8 M415 302 v8" />
          <circle cx="557" cy="306" r="9" />
          <path strokeWidth="1" d="M553 306 h8 M557 302 v8" />
          <path d="M415 319 V332 M557 319 V332" />
        </g>
        <path
          className="fig-belt"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
          strokeDasharray="6 6"
          d="M406 297 H566"
        />

        {/* traveling block (accent — the one colored element) */}
        <g className="fig-block">
          <rect x="404" y="280" width="18" height="13" fill="var(--accent)" stroke="currentColor" strokeWidth="1.1" />
        </g>

        {/* 60 — shipped package */}
        <g stroke="currentColor" strokeWidth="1.3">
          <rect x="580" y="302" width="28" height="30" />
          <path strokeWidth="1" d="M594 302 V332 M580 317 H608" />
        </g>

        {/* callout leaders */}
        <g stroke="currentColor" strokeWidth="0.9" opacity="0.5" strokeLinecap="round">
          <path d="M154 62 L200 74" />
          <path d="M146 226 L206 216" />
          <path d="M312 92 L332 128" />
          <path d="M478 262 V290" />
          <path d="M434 158 L406 172" />
          <path d="M600 270 L594 298" />
        </g>

        {/* callout numbers */}
        <g className="fig-num">
          <text x="140" y="58">10</text>
          <text x="128" y="232">20</text>
          <text x="300" y="88">30</text>
          <text x="470" y="256">40</text>
          <text x="432" y="152">50</text>
          <text x="592" y="264">60</text>
        </g>
      </svg>

      <div className="fig-caption">
        <span className="fig-no">FIG. 1</span>
        <span className="fig-title">Apparatus for shipping software, end to end</span>
      </div>
      <div className="fig-legend">
        <span><b>10</b> spec</span>
        <span><b>20</b> build</span>
        <span><b>30</b> evals</span>
        <span><b>40</b> ship</span>
        <span><b>50</b> Stripe</span>
        <span><b>60</b> production</span>
      </div>
    </div>
  );
}

// ─────────── now / dashboard mockup ───────────

export function NowMockup() {
  return (
    <div className="now-mockup" aria-hidden="true">
      <div className="now-mockup-bar">
        <div className="dots"><span /><span /><span /></div>
        <div className="tab">salaryguide.app / dashboard</div>
      </div>
      <div className="now-mockup-body">
        <div className="now-mockup-head">
          <div className="now-mockup-headline">
            <div className="now-mockup-num-wrap">
              <span className="now-mockup-currency">$</span>
              <span className="now-mockup-num">112,400</span>
              <span className="now-mockup-cursor" />
            </div>
            <div className="now-mockup-num-sub">Median / Paid Media / NY</div>
          </div>
          <div className="now-mockup-delta">
            <span className="now-mockup-delta-arrow">↗</span>
            <span className="now-mockup-delta-num">+6.2%</span>
          </div>
        </div>

        {/* mini KPI grid */}
        <div className="now-mockup-kpi">
          <div className="now-mockup-kpi-cell">
            <span className="k">Jobs</span>
            <span className="v">500K+</span>
            <span className="bar"><span className="fill f1" /></span>
          </div>
          <div className="now-mockup-kpi-cell">
            <span className="k">Matches</span>
            <span className="v">75K</span>
            <span className="bar"><span className="fill f2" /></span>
          </div>
          <div className="now-mockup-kpi-cell">
            <span className="k">Resumes</span>
            <span className="v">1.2K</span>
            <span className="bar"><span className="fill f3" /></span>
          </div>
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
          <div className="now-mockup-row r1">
            <div className="av acc" />
            <div className="lbl" style={{ width: "70%" }} />
            <div className="pill">New York</div>
          </div>
          <div className="now-mockup-row r2">
            <div className="av acc2" />
            <div className="lbl" style={{ width: "55%" }} />
            <div className="pill">Austin</div>
          </div>
          <div className="now-mockup-row r3">
            <div className="av" />
            <div className="lbl" style={{ width: "62%" }} />
            <div className="pill">San Francisco</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────── work / past illustrations ───────────

type WorkIlluProps = {
  kind: "juro" | "ancor";
};

export function WorkIllu({ kind }: WorkIlluProps) {
  if (kind === "juro") {
    return (
      <div className="work-illu work-illu-juro" aria-hidden="true">
        <div className="ln t" />
        <div className="ln w-90" />
        <div className="ln w-70" />
        <div className="ln h" />
        <div className="ln w-50" />
        <div className="comment">Comment by AA</div>
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

// ─────────── project preview illustrations ───────────

type ProjectPreviewProps = {
  kind: "bot" | "ui" | "msg";
};

export function ProjectPreview({ kind }: ProjectPreviewProps) {
  if (kind === "bot") {
    return (
      <div className="proj-preview preview-bot">
        <div className="bubbles">
          <div className="seq-row user b1">
            <div className="typing-bubble out">
              <span className="d" /><span className="d" /><span className="d" />
            </div>
            <div className="bubble user">/sticker fox in space</div>
          </div>
          <div className="seq-row bot b2">
            <div className="typing-bubble">
              <span className="d" /><span className="d" /><span className="d" />
            </div>
            <div className="bubble bot">Generating your pack <span className="dots-trail"><span /><span /><span /></span></div>
          </div>
          <div className="seq-row stickers-row b3">
            <div className="stickers">
              <div className="sticker s1">
                <span className="face">
                  <span className="eye" /><span className="eye r" /><span className="mouth" />
                </span>
              </div>
              <div className="sticker s2"><span className="spark">✦</span></div>
              <div className="sticker s3"><span className="planet" /></div>
              <div className="sticker s4"><span className="spark s">✦</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "ui") {
    return (
      <div className="proj-preview preview-ui">
        <div className="ui-window">
          <div className="ui-window-bar">
            <div className="ui-window-dots"><span /><span /><span /></div>
            <span className="ui-window-title">Sign in</span>
            <span className="ui-window-x">×</span>
          </div>
          <div className="ui-tabs ui-step u1">
            <span className="ui-tab active">Sign in</span>
            <span className="ui-tab">Register</span>
            <span className="ui-tab-pill" />
          </div>
          <div className="ui-row ui-step u2">
            <div className="ui-circle" />
            <div className="ui-bars">
              <div className="ui-bar long" />
              <div className="ui-bar short" />
            </div>
            <div className="ui-toggle"><span className="ui-toggle-knob" /></div>
          </div>
          <div className="ui-input ui-step u3">
            <span className="ui-input-icon">@</span>
            <span className="ui-input-text" />
            <span className="ui-input-caret" />
          </div>
          <div className="ui-input ui-pwd ui-step u4">
            <span className="ui-input-icon">⚿</span>
            <span className="ui-pwd-dots">
              <span /><span /><span /><span /><span /><span /><span /><span />
            </span>
            <span className="ui-input-eye">●</span>
          </div>
          <div className="ui-check-row ui-step u5">
            <span className="ui-checkbox"><span className="ui-check-mark">✓</span></span>
            <span className="ui-check-label">Remember me</span>
            <span className="ui-link">Forgot?</span>
          </div>
          <div className="ui-btn ui-step u6">
            <span className="ui-btn-label">Continue</span>
            <span className="ui-btn-spin" />
            <span className="ui-btn-check">✓</span>
          </div>
          <span className="ui-cursor" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d="M2 2L8 14L9.5 9.5L14 8L2 2Z" stroke="#fff" strokeWidth="0.6" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    );
  }
  if (kind === "msg") {
    return (
      <div className="proj-preview preview-msg">
        <div className="conv">
          <div className="seq-row in m1">
            <div className="typing-bubble">
              <span className="d" /><span className="d" /><span className="d" />
            </div>
            <div className="msg in">Hey, you online?</div>
          </div>
          <div className="seq-row out m2">
            <div className="typing-bubble out">
              <span className="d" /><span className="d" /><span className="d" />
            </div>
            <div className="msg out">Yeah, what's up <span className="check">✓✓</span></div>
          </div>
          <div className="seq-row in m3">
            <div className="typing-bubble">
              <span className="d" /><span className="d" /><span className="d" />
            </div>
            <div className="msg in">Sent the docs</div>
          </div>
          <div className="seq-row out m4 only-typing">
            <div className="typing-bubble out">
              <span className="d" /><span className="d" /><span className="d" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

// ─────────── writing illustrations ───────────

type WriteIlluProps = {
  topic: "stack" | "tenx";
};

export function WriteIllu({ topic }: WriteIlluProps) {
  if (topic === "stack") {
    return (
      <div className="write-illu write-illu-stack" aria-hidden="true">
        <div className="ws-shelf">
          <div className="ws-card ws-c1">React</div>
          <div className="ws-card ws-c2">Vue</div>
          <div className="ws-card ws-c3">Svelte</div>
          <div className="ws-card ws-c4">Solid</div>
          <div className="ws-card ws-c5">Angular</div>
        </div>
        <div className="ws-equation">
          <span className="ws-equals">≡</span>
          <span className="ws-result-text">same product</span>
          <span className="ws-result-arrow">→</span>
        </div>
      </div>
    );
  }
  if (topic === "tenx") {
    return (
      <div className="write-illu write-illu-tenx" aria-hidden="true">
        <div className="wt-row">
          <span className="wt-label">1×</span>
          <span className="wt-bar wt-b1">
            <span className="wt-bar-fill" />
            <span className="wt-strike" />
          </span>
        </div>
        <div className="wt-row">
          <span className="wt-label">1×</span>
          <span className="wt-bar wt-b2">
            <span className="wt-bar-fill" />
            <span className="wt-strike" />
          </span>
        </div>
        <div className="wt-row">
          <span className="wt-label">1×</span>
          <span className="wt-bar wt-b3">
            <span className="wt-bar-fill" />
            <span className="wt-strike" />
          </span>
        </div>
        <div className="wt-row wt-hero">
          <span className="wt-label is-10x">10×</span>
          <span className="wt-bar wt-b4">
            <span className="wt-bar-fill is-10x" />
          </span>
          <span className="wt-note">ships less.</span>
        </div>
      </div>
    );
  }
  return null;
}

// ─────────── product: howtoship.dev site preview ───────────
// A minimal browser window: the real first post plus dimmed draft rows.

export function HtsIllu() {
  return (
    <div className="hts-illu" aria-hidden="true">
      <div className="hts-site">
        <div className="hts-site-bar">
          <div className="hts-site-dots"><span /><span /><span /></div>
          <span className="hts-site-url">howtoship.dev</span>
        </div>
        <div className="hts-site-body">
          <div className="hts-site-post live">
            <span className="hts-site-title">A lot of AI bugs are state bugs.</span>
            <span className="hts-site-meta">4 min</span>
          </div>
          <div className="hts-site-post draft">
            <span className="hts-site-line w-75" />
            <span className="hts-site-tag">draft</span>
          </div>
          <div className="hts-site-post draft">
            <span className="hts-site-line w-55" />
            <span className="hts-site-tag">draft</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small per-post illustration. For "AI product": a model node surrounded by
// the state around it (input · store · output), with one token glitching —
// the post's thesis that the bug lives in the state, not the prompt.
type PostIlluProps = {
  topic: "AI product";
};

export function PostIllu({ topic }: PostIlluProps) {
  if (topic === "AI product") {
    return (
      <div className="post-illu post-illu-state" aria-hidden="true">
        <span className="pi-orbit" />
        <span className="pi-core">AI</span>
        <span className="pi-node n-in"><i />input</span>
        <span className="pi-node n-store"><i />store</span>
        <span className="pi-node n-out glitch"><i />output</span>
        <span className="pi-bug">!</span>
      </div>
    );
  }
  return null;
}
