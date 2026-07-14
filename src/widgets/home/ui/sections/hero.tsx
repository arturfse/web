import { Reveal, SplitWords } from "@shared/ui/anim";
import { scrollToId } from "@shared/lib/dom";
import { ArrowUR } from "@shared/ui/icons";
import { HeroIllustration } from "@widgets/home/ui/illustrations";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="hero-grid" aria-hidden="true" />

      <div className="shell hero-main">
        <div className="hero-text">
          <h1 className="hero-headline">
            <SplitWords text="Founding Engineer / Senior Full-Stack" delay={150} />
          </h1>

          <Reveal delay={1000} className="lead">
            I take full ownership of live products - production, payments, automation, AI features. 7+ years. Currently the engineering team behind SalaryGuide.
          </Reveal>

          <Reveal delay={1200} className="hero-row">
            <button className="btn" onClick={() => scrollToId("how-i-work")}>
              <span>See how I work</span>
              <span className="arr"><ArrowUR size={13} /></span>
            </button>
            <a className="btn-ghost" href="mailto:arthur.arslanoov@gmail.com">Get in touch</a>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <HeroIllustration />
        </Reveal>
      </div>
    </section>
  );
}
