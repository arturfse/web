import "@app/styles/home/22-now-mockup-anim.css";
import { Reveal } from "@shared/ui/anim";
import { SecHead } from "@widgets/home/ui/components";
import { NowMockup } from "@widgets/home/ui/illustrations";
import { CURRENT } from "@entities/home-content/model/now";

export function Now() {
  return (
    <div className="shell">
        <SecHead title="Now." />

        <div className="now-wrap">
          <Reveal delay={100}>
            <div className="now-lede">
              <div className="now-head">
                <div className="now-status">
                  <span className="dot" />{CURRENT.status}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>
                  {CURRENT.period}
                </div>
              </div>

              <h3 className="now-title">{CURRENT.company}</h3>

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

        <Reveal delay={300} style={{ marginTop: 48 }}>
          <div className="shipped-grid">
            <div className="shipped-head">
              <h4>Shipped at SalaryGuide</h4>
            </div>
            <div className="shipped-list">
              {CURRENT.shipped.map((s, i) => (
                <div className="shipped-item" key={i}>
                  <div className="shipped-k">{s.k}</div>
                  <div className="shipped-v">{s.v}</div>
                  <div className="shipped-d">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
    </div>
  );
}
