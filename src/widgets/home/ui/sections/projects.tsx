import "@app/styles/home/23-preview-anim.css";
import { Reveal } from "@shared/ui/anim";
import { ArrowUR } from "@shared/ui/icons";
import { SecHead } from "@widgets/home/ui/components";
import { ProjectPreview } from "@widgets/home/ui/illustrations";
import { PROJECTS } from "@entities/home-content/model/projects";
import { isWorkWithMeExperiment } from "@entities/home-content/model/experiment";

export function Projects() {
  const sectionNumber = isWorkWithMeExperiment() ? "07" : "06";

  return (
    <div className="shell">
        <SecHead
          num={sectionNumber}
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
  );
}
