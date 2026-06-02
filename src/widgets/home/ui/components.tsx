import type { ReactNode } from "react";
import { useStickyCtaVisible } from "@shared/lib/hooks";
import { Reveal } from "@shared/ui/anim";
import { scrollToId } from "@shared/lib/dom";
import { ArrowUR } from "@shared/ui/icons";

type SecHeadProps = {
  num: string;
  kicker: string;
  title: ReactNode;
  meta: readonly ReactNode[];
};

export function SecHead({ num, kicker, title, meta }: SecHeadProps) {
  return (
    <Reveal>
      <div className="sec-head">
        <div className="sec-head-title">
          <div className="eyebrow"><span className="dot" /><span className="num">{num}</span> {kicker}</div>
          <h2 className="h2" style={{ marginTop: 20 }}>{title}</h2>
        </div>
        <div className="sec-head-meta">
          {meta.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </Reveal>
  );
}

export function StickyCTA() {
  const show = useStickyCtaVisible();

  return (
    <button
      className={`sticky-cta ${show ? "show" : ""}`}
      onClick={() => scrollToId("contact")}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <span>Get in touch</span>
      <span className="arr"><ArrowUR size={13} /></span>
    </button>
  );
}
