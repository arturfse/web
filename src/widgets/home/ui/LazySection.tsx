import {
  Suspense,
  useRef,
  type ComponentType,
  type CSSProperties,
  type LazyExoticComponent,
} from "react";
import { useElementVisible, useNearViewport } from "@shared/lib/hooks";
import type { CSSVarStyle } from "@shared/types/css";

type LazySectionProps = {
  id: string;
  component: LazyExoticComponent<ComponentType>;
  minHeight: number;
  className?: string;
  loadMargin?: string;
  style?: CSSProperties;
};

function SectionShell() {
  return <div className="deferred-shell" aria-hidden="true" />;
}

export function LazySection({
  id,
  component,
  minHeight,
  className = "",
  loadMargin = "1000px",
  style,
}: LazySectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const shouldLoad = useNearViewport(ref, loadMargin);
  const visible = useElementVisible(ref, "120px");
  const Component = component;
  const sectionStyle: CSSVarStyle = {
    "--deferred-min-height": `${minHeight}px`,
    ...style,
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`deferred-section ${className}`}
      data-animate={visible ? "running" : "paused"}
      style={sectionStyle}
    >
      {shouldLoad ? (
        <Suspense fallback={<SectionShell />}>
          <Component />
        </Suspense>
      ) : (
        <SectionShell />
      )}
    </section>
  );
}
