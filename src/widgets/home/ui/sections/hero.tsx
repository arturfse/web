import { Reveal, SplitWords } from "@shared/ui/anim";
import { scrollToId } from "@shared/lib/dom";
import { Obf, ObfText } from "@shared/lib/obfuscate";
import { CONTACT } from "@entities/home-content/model/contact";
import { HeroIllustration } from "@widgets/home/ui/illustrations";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="shell hero-main">
        <h1 className="hero-headline">
          <span className="hl-line"><SplitWords text="Founding Engineer /" delay={150} /></span>
          <span className="hl-line hl-offset"><SplitWords text="Senior Full-Stack" delay={400} /></span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-text">
            <Reveal delay={900} className="lead">
              I build and run live products end to end: production, payments, automation, AI features. 7+ years. Currently building SalaryGuide.
            </Reveal>

            <Reveal delay={1100} className="hero-row">
              <button className="btn" onClick={() => scrollToId("how-i-work")}>
                See how I work
              </button>
              <Obf className="btn-ghost" d={CONTACT.email} kind="mail" aria-label="Get in touch">
                <ObfText data={CONTACT.getInTouchText} />
              </Obf>
            </Reveal>
          </div>

          <Reveal delay={500} className="hero-visual">
            <HeroIllustration />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
