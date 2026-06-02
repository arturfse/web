import {
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useInView } from "@shared/lib/hooks";
import type { CSSVarStyle } from "@shared/types/css";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLDivElement>, "className" | "style" | "children">;

export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  const viewStyle: CSSVarStyle = { "--delay": `${delay}ms`, ...style };

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={viewStyle}
      {...rest}
    >
      {children}
    </div>
  );
}

type SplitWordsProps = {
  text: string;
  delay?: number;
  className?: string;
};

export function SplitWords({
  text,
  delay = 0,
  className = "",
}: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref);
  const words = text.split(" ");
  const viewStyle: CSSVarStyle = { "--delay": `${delay}ms` };
  const content = words.map((w, i) => (
    <span key={i} className="w">
      <span style={{ "--i": i } as CSSVarStyle}>{w}</span>
    </span>
  ));

  return (
    <span ref={ref} className={`split ${inView ? "in" : ""} ${className}`} style={viewStyle}>
      {content}
    </span>
  );
}

type MaskLineProps = {
  children: ReactNode;
  delay?: number;
};

export function MaskLine({ children, delay = 0 }: MaskLineProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref);

  return (
    <span
      ref={ref}
      className={`mask ${inView ? "in" : ""}`}
      style={{ "--delay": `${delay}ms` } as CSSVarStyle}
    >
      <span>{children}</span>
    </span>
  );
}
