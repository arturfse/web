// ─────────── hero ───────────

export function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="illu-stack">

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

        {/* terminal card — mid-right, behind browser */}
        <div className="illu-card illu-term">
          <div className="illu-term-bar">
            <div className="illu-browser-dots"><span /><span /><span /></div>
            <span className="illu-term-title">~ /deploy</span>
          </div>
          <div className="illu-term-body">
            <div className="tl"><span className="prompt">$</span> git push origin <span className="hl">main</span></div>
            <div className="tl muted">→ building...</div>
            <div className="tl muted">→ tests <span className="ok">✓</span> 248 passed</div>
            <div className="tl muted">→ bundle <span className="ok">✓</span> 142kb gzip</div>
            <div className="tl"><span className="prompt">$</span> <span className="caret" /></div>
          </div>
        </div>

        {/* single metric pill — ties to the Juro contracts scale */}
        <div className="illu-pill illu-pill-1">
          <div className="illu-pill-icon">a</div>
          <div className="illu-pill-text">
            <span className="illu-pill-value">8K / mo</span>
            <span className="illu-pill-label">Contracts shipped</span>
          </div>
        </div>

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
            <div className="now-mockup-num-sub">Median · Paid Media · NY</div>
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
            <div className="bubble bot">Cooking up your pack <span className="dots-trail"><span /><span /><span /></span></div>
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

// ─────────── product: ship → rocket launch ───────────
// Larger, better-proportioned rocket with a smoother arced flight loop.

export function HtsIllu() {
  return (
    <div className="hts-illu" aria-hidden="true">
      <div className="hts-sky">
        <span className="hts-star a" />
        <span className="hts-star b" />
        <span className="hts-star c" />
        <span className="hts-star d" />
        <span className="hts-star e" />
        <span className="hts-star f" />
        <span className="hts-star g" />

        {/* dotted launch trajectory that draws upward */}
        <span className="hts-traj" />

        {/* apex badge — the post goes live */}
        <div className="hts-pill">
          <span className="hts-pill-check">✓</span>
          <span>Shipped</span>
        </div>

        {/* the rocket, built from divs */}
        <div className="hts-rocket">
          <span className="hts-rk-nose" />
          <span className="hts-rk-body">
            <span className="hts-rk-window" />
            <span className="hts-rk-stripe" />
          </span>
          <span className="hts-rk-fin l" />
          <span className="hts-rk-fin r" />
          <span className="hts-rk-flame">
            <span className="hts-rk-flame-core" />
          </span>
        </div>

        {/* exhaust smoke at the pad */}
        <span className="hts-smoke s1" />
        <span className="hts-smoke s2" />
        <span className="hts-smoke s3" />
      </div>

      {/* launchpad terminal — the "ship it" trigger */}
      <div className="hts-pad">
        <div className="hts-pad-dots"><span /><span /><span /></div>
        <div className="hts-pad-line">
          <span className="hts-pad-prompt">$</span>
          <span className="hts-pad-cmd">ship it</span>
          <span className="hts-pad-arr">→</span>
          <span className="hts-pad-caret" />
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
