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

// ─────────── now: FIG. 2 — job-matching engine ───────────
// Same patent language as FIG. 1. Jobs ride a rail into a sorting drum,
// a resume feeds in from the side, a shortlist drops out, the rest goes
// to the bin. The only numbers near it are the real claims in the copy.

export function SalaryGuideFig() {
  return (
    <div className="fig-wrap" aria-hidden="true">
      <svg className="fig" viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ground */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.45" strokeLinecap="round">
          <path d="M40 396 H530" />
          <path d="M70 396 l-9 9 M130 396 l-9 9 M190 396 l-9 9 M480 396 l-9 9 M520 396 l-9 9" />
        </g>

        {/* 10 — jobs rail feeding the funnel; rail ends over the funnel mouth */}
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M64 42 V52 M64 52 H322" />
          <path d="M312 76 H360 M312 76 L330 110 M360 76 L344 110 M330 110 V170 M344 110 V170" />
        </g>
        {/* static queued blocks on the rail */}
        <g stroke="currentColor" strokeWidth="1.2">
          <rect x="86" y="40" width="12" height="10" />
          <rect x="116" y="40" width="12" height="10" />
        </g>
        {/* moving job block */}
        <rect className="fig2-job" x="150" y="40" width="12" height="10" stroke="currentColor" strokeWidth="1.2" />

        {/* 20 — resume document + duct into the housing */}
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M58 148 H88 L96 156 V196 H58 Z M88 148 V156 H96" />
          <path strokeWidth="1" d="M66 162 H88 M66 170 H88 M66 178 H82 M66 186 H88" />
          <path d="M96 166 L200 206 M96 180 L200 220" />
        </g>

        {/* 30 — sorting drum inside its housing */}
        <g stroke="currentColor" strokeWidth="1.3">
          <rect x="200" y="170" width="160" height="140" rx="3" />
          <circle cx="210" cy="180" r="2.2" />
          <circle cx="350" cy="180" r="2.2" />
          <circle cx="210" cy="300" r="2.2" />
          <circle cx="350" cy="300" r="2.2" />
        </g>
        <g className="fig2-drum" stroke="currentColor" strokeWidth="1.1" strokeDasharray="4 3">
          <circle cx="280" cy="240" r="52" />
          <circle cx="280" cy="240" r="40" />
          <circle cx="280" cy="240" r="8" strokeDasharray="none" />
          <path d="M280 232 V188 M287 236 L325 214 M287 244 L325 266 M280 248 V292 M273 244 L235 266 M273 236 L235 214" />
        </g>
        {/* housing legs */}
        <path stroke="currentColor" strokeWidth="1.3" d="M214 310 V396 M346 310 V396" />

        {/* discard bin under the housing */}
        <g stroke="currentColor" strokeWidth="1.3">
          <path d="M252 364 V396 H308 V364" />
          <path strokeWidth="0.8" opacity="0.5" d="M257 394 l9 -17 M267 394 l9 -17 M277 394 l9 -17 M287 394 l9 -17 M297 394 l9 -17" />
        </g>
        <rect className="fig2-reject" x="272" y="316" width="12" height="10" stroke="currentColor" strokeWidth="1.2" opacity="0" />

        {/* 40 — chute to the shortlist tray */}
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M360 284 L398 334 M360 300 L390 340" />
          <path d="M392 340 V366 H456 V340" />
          <path d="M400 366 V396 M448 366 V396" />
        </g>
        {/* blocks already in the tray + the accepted one dropping in (accent) */}
        <g stroke="currentColor" strokeWidth="1.2">
          <rect x="398" y="354" width="12" height="10" />
          <rect x="414" y="354" width="12" height="10" />
        </g>
        <rect className="fig2-accept" x="428" y="330" width="12" height="10" fill="var(--accent)" stroke="currentColor" strokeWidth="1.1" />

        {/* 50 — apply kit envelope */}
        <g stroke="currentColor" strokeWidth="1.3">
          <rect x="474" y="364" width="52" height="32" />
          <path strokeWidth="1" d="M474 364 L500 382 L526 364" />
          <rect x="512" y="368" width="9" height="7" strokeWidth="1" />
          <path strokeWidth="1" strokeDasharray="3 4" d="M456 350 Q468 334 486 360" />
        </g>

        {/* callout leaders */}
        <g stroke="currentColor" strokeWidth="0.9" opacity="0.5" strokeLinecap="round">
          <path d="M74 42 L104 50" />
          <path d="M52 130 L62 146" />
          <path d="M158 252 L226 246" />
          <path d="M462 306 L436 342" />
          <path d="M524 344 L508 362" />
        </g>
        <g className="fig-num">
          <text x="60" y="38">10</text>
          <text x="40" y="126">20</text>
          <text x="138" y="258">30</text>
          <text x="456" y="300">40</text>
          <text x="518" y="338">50</text>
        </g>
      </svg>

      <div className="fig-caption">
        <span className="fig-no">FIG. 2</span>
        <span className="fig-title">Job-matching engine, 500K jobs in, a shortlist out</span>
      </div>
      <div className="fig-legend">
        <span><b>10</b> jobs</span>
        <span><b>20</b> resume</span>
        <span><b>30</b> matcher</span>
        <span><b>40</b> shortlist</span>
        <span><b>50</b> apply kit</span>
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

// ─────────── product: FIG. 3 — lesson press (howtoship.dev) ───────────
// A screw press squeezes production incidents into flat one-page lessons.

export function HowtoshipFig() {
  return (
    <div className="fig-wrap" aria-hidden="true">
      <svg className="fig" viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ground */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.45" strokeLinecap="round">
          <path d="M50 300 H520" />
          <path d="M80 300 l-9 9 M130 300 l-9 9 M470 300 l-9 9 M508 300 l-9 9" />
        </g>

        {/* press frame: crossbeam, columns, base platen on a hatched foundation */}
        <g stroke="currentColor" strokeWidth="1.3">
          <rect x="200" y="60" width="160" height="14" rx="2" />
          <path d="M206 74 V260 M216 74 V260 M344 74 V260 M354 74 V260" />
          <rect x="190" y="260" width="180" height="16" rx="2" />
          <rect x="216" y="276" width="128" height="24" />
          <path
            strokeWidth="0.8"
            opacity="0.5"
            d="M222 298 l10 -20 M234 298 l10 -20 M246 298 l10 -20 M258 298 l10 -20 M270 298 l10 -20 M282 298 l10 -20 M294 298 l10 -20 M306 298 l10 -20 M318 298 l10 -20 M330 298 l10 -20"
          />
          <circle cx="208" cy="67" r="2" />
          <circle cx="352" cy="67" r="2" />
        </g>

        {/* 20 — screw, handle, ram plate (moves as one) */}
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M244 48 H316 M280 48 V60" />
          <circle cx="244" cy="48" r="3" />
          <circle cx="316" cy="48" r="3" />
        </g>
        <g className="fig3-ram" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M280 74 V150" />
          <path strokeWidth="1" d="M274 84 h12 M274 96 h12 M274 108 h12 M274 120 h12 M274 132 h12" />
          <rect x="232" y="150" width="96" height="12" rx="2" />
        </g>

        {/* 10 — incident chute from production, with a small loading ledge */}
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M62 158 V172 M62 172 H84 M84 172 V186 M84 172 L228 226 M84 186 L222 240" />
        </g>
        {/* jagged incident block sliding down */}
        <path
          className="fig3-bug"
          d="M120 158 l7 -6 6 5 8 -4 3 8 -4 6 -9 3 -8 -3 z"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        {/* the blob being pressed on the platen */}
        <path
          className="fig3-squish"
          d="M258 244 l8 -10 10 4 9 -6 8 8 4 10 h-42 z"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        {/* 30 — flat lesson page emerging onto the platen edge (static anchor
            for the callout) plus an animated copy that slides to the stack */}
        <g stroke="currentColor" strokeWidth="1.2">
          <rect x="338" y="246" width="44" height="13" />
          <path d="M344 252.5 H368" stroke="var(--accent)" strokeWidth="2" />
        </g>
        <g className="fig3-page">
          <rect x="338" y="246" width="44" height="13" stroke="currentColor" strokeWidth="1.2" />
          <path d="M344 252.5 H368" stroke="var(--accent)" strokeWidth="2" />
        </g>

        {/* 40 — stack of published pages */}
        <g stroke="currentColor" strokeWidth="1.2">
          <rect x="424" y="286" width="56" height="14" />
          <rect x="428" y="272" width="56" height="14" />
          <rect x="432" y="258" width="56" height="14" />
          <path d="M440 265 H472" stroke="var(--accent)" strokeWidth="2" />
        </g>

        {/* callout leaders */}
        <g stroke="currentColor" strokeWidth="0.9" opacity="0.5" strokeLinecap="round">
          <path d="M72 148 L92 168" />
          <path d="M196 42 L240 52" />
          <path d="M410 210 L388 240" />
          <path d="M508 240 L490 258" />
        </g>
        <g className="fig-num">
          <text x="58" y="144">10</text>
          <text x="180" y="38">20</text>
          <text x="404" y="204">30</text>
          <text x="502" y="234">40</text>
        </g>
      </svg>

      <div className="fig-caption">
        <span className="fig-no">FIG. 3</span>
        <span className="fig-title">Lesson press, one page per production incident</span>
      </div>
      <div className="fig-legend">
        <span><b>10</b> incident</span>
        <span><b>20</b> press</span>
        <span><b>30</b> lesson</span>
        <span><b>40</b> published</span>
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
