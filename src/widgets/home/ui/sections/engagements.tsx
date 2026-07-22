import { Reveal } from "@shared/ui/anim";
import { Obf, ObfText } from "@shared/lib/obfuscate";
import { CONTACT } from "@entities/home-content/model/contact";
import { SecHead } from "@widgets/home/ui/components";

const ENGAGEMENTS = [
  {
    title: "Founding Engineer (embedded)",
    subtitle: "Full-time or 4 days/week.",
    text: "I join as your first or lead engineer: set direction, build the V1, talk to users.",
  },
  {
    title: "Senior Full-Stack Contract",
    subtitle: "Fixed scope or monthly.",
    text: "A defined build shipped to production: real-time systems, AI/LLM features, payments, data layers.",
  },
  {
    title: "Fractional / Advisory",
    subtitle: "A few hours a week.",
    text: "Architecture reviews, AI-workflow setup, technical direction.",
  },
] as const;

export function Engagements() {
  return (
    <div className="shell">
      <SecHead title="Work with me" />

      <p className="engagement-intro">
        I take live SaaS products end-to-end: production, payments, automation, AI/LLM features.
      </p>

      <div className="engagement-list">
        {ENGAGEMENTS.map((engagement, index) => (
          <Reveal delay={100 + index * 100} key={engagement.title}>
            <article className="engagement-item">
              <h3>{engagement.title}</h3>
              <div className="engagement-subtitle">{engagement.subtitle}</div>
              <p>{engagement.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="engagement-close">
        <p>Remote (CET) - full EU overlap + US mornings. B2B invoicing. English, async-first.</p>
        <Obf className="btn" d={CONTACT.email} kind="mail" aria-label="Get in touch">
          <ObfText data={CONTACT.getInTouchText} />
        </Obf>
      </div>
    </div>
  );
}
