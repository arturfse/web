import { Reveal, SplitWords } from "@shared/ui/anim";
import { scrollToId } from "@shared/lib/dom";
import { ArrowUR } from "@shared/ui/icons";
import { HeroIllustration } from "@widgets/home/ui/illustrations";
import { ROTATING_WORDS } from "@entities/home-content/model/hero";

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
            <SplitWords text="Where messy human workflow meets" delay={150} /><br/>
            <span className="rotator">
              <span className="rotator-track">
                {ROTATING_WORDS.map((w, i) => <span key={i}>{w}</span>)}
                <span>{ROTATING_WORDS[0]}</span>
              </span>
            </span>
          </h1>

          <Reveal delay={1000} className="lead">
            Senior FullStack Engineer. I work on the systems behind real-time, collaborative products. 6+ years across two B2B companies and a third I'm building from scratch
          </Reveal>

          <Reveal delay={1200} className="hero-row">
            <button className="btn" onClick={() => scrollToId("projects")}>
              <span>See selected work</span>
              <span className="arr"><ArrowUR size={13} /></span>
            </button>
            <button className="btn-ghost" onClick={() => scrollToId("now")}>
              What I'm building now
            </button>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <HeroIllustration />
        </Reveal>
      </div>
    </section>
  );
}
