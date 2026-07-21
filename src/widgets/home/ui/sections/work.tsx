import "@app/styles/home/23-preview-anim.css";
import { Reveal } from "@shared/ui/anim";
import { SecHead } from "@widgets/home/ui/components";
import { WorkIllu } from "@widgets/home/ui/illustrations";
import { TIMELINE } from "@entities/home-content/model/work";

export function Work() {
  return (
    <div className="shell">
        <SecHead
          title="Previously."
          meta={[<span className="num">7+ years</span>]}
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
                </div>
                <WorkIllu kind={it.illu} />
              </article>
            </Reveal>
          ))}
        </div>
    </div>
  );
}
