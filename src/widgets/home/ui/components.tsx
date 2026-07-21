import type { ReactNode } from "react";
import { useStickyCtaVisible } from "@shared/lib/hooks";
import { Reveal } from "@shared/ui/anim";
import { scrollToId } from "@shared/lib/dom";

type SecHeadProps = {
  title: ReactNode;
  meta?: readonly ReactNode[];
};

export function SecHead({ title, meta }: SecHeadProps) {
  return (
    <Reveal>
      <div className="sec-head">
        <div className="sec-head-title">
          <h2 className="h2">{title}</h2>
        </div>
        {meta && meta.length > 0 && (
          <div className="sec-head-meta">
            {meta.map((m, i) => <span key={i}>{m}</span>)}
          </div>
        )}
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
    </button>
  );
}
