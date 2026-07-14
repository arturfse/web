import { Reveal } from "@shared/ui/anim";
import { ArrowUR } from "@shared/ui/icons";
import { SecHead } from "@widgets/home/ui/components";

const ENGAGEMENTS = [
  {
    title: "Founding Engineer (embedded)",
    subtitle: "Full-time or 4 days/week.",
    text: "I join as your first/lead engineer: set technical direction, build the V1, talk to users, ship.",
  },
  {
    title: "Senior Full-Stack Contract",
    subtitle: "Fixed scope or monthly.",
    text: "A defined build shipped to production: real-time systems, AI/LLM features, payments, data layers.",
  },
  {
    title: "Fractional / Advisory",
    subtitle: "Architecture · AI workflow · Direction",
    text: "Architecture reviews, AI-workflow setup, technical direction. A few hours a week.",
  },
] as const;

export function Engagements() {
  return (
    <div className="shell">
      <SecHead
        num="03"
        kicker="Ways to work together"
        title="Work with me"
        meta={[<span className="num">Remote</span>, "CET"]}
      />

      <Reveal className="engagement-intro">
        I take live SaaS products end-to-end: production, payments, automation, AI/LLM features.
      </Reveal>

      <div className="engagement-grid">
        {ENGAGEMENTS.map((engagement, index) => (
          <Reveal delay={100 + index * 100} key={engagement.title}>
            <article className="engagement-card">
              <span className="engagement-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{engagement.title}</h3>
              <div className="engagement-subtitle">{engagement.subtitle}</div>
              <p>{engagement.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={420} className="engagement-close">
        <p>Remote (CET) - full EU overlap + US mornings. B2B invoicing. English, async-first.</p>
        <a className="btn" href="mailto:arthur.arslanoov@gmail.com">
          <span>Get in touch</span>
          <span className="arr"><ArrowUR size={13} /></span>
        </a>
      </Reveal>
    </div>
  );
}
