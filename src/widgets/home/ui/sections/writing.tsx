import "@app/styles/home/23-preview-anim.css";
import { Reveal } from "@shared/ui/anim";
import { ArrowUR } from "@shared/ui/icons";
import { SecHead } from "@widgets/home/ui/components";
import { WriteIllu } from "@widgets/home/ui/illustrations";
import { WRITING } from "@entities/home-content/model/writing";

export function Writing() {
  return (
    <div className="shell">
        <SecHead
          title="Writing."
          meta={[<span className="num">700k+ reads</span>, "On LinkedIn"]}
        />

        <div className="write-grid">
          {WRITING.map((w, i) => (
            <Reveal delay={i * 120} key={w.title}>
              <a className="write-card" href={w.href} target="_blank" rel="noopener noreferrer">
                <h3 className="write-title">{w.title}</h3>
                <p style={{ color: "var(--text-dim)", fontSize: 15, lineHeight: 1.55, flex: 1 }}>{w.blurb}</p>

                <WriteIllu topic={w.topic} />

                <div className="write-foot">
                  <span>{w.meta}</span>
                  <span className="views">{w.views}<ArrowUR size={11} /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
    </div>
  );
}
