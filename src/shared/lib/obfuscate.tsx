import {
  useEffect,
  useRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

// Contacts are XOR-encoded with this runtime-derived key and rendered into a
// canvas so source scrapers cannot read the plain text.
export const CONTACT_KEY = String.fromCharCode(115, 105, 116, 101, 45, 107, 101, 121, 45, 50, 48, 50, 54);

export function dec(codes: readonly number[]): string {
  try {
    return codes.map((n, i) => String.fromCharCode(n ^ CONTACT_KEY.charCodeAt(i % CONTACT_KEY.length))).join("");
  } catch {
    return "";
  }
}

type ObfTextProps = {
  data: readonly number[];
  className?: string;
};

export function ObfText({ data, className = "" }: ObfTextProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const text = dec(data);
    if (!text) return;

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const styles = window.getComputedStyle(canvas);
      const font = styles.font || `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;
      const fontSize = parseFloat(styles.fontSize) || 13;
      const lineHeight = parseFloat(styles.lineHeight) || Math.ceil(fontSize * 1.35);
      const dpr = Math.max(1, window.devicePixelRatio || 1);

      ctx.font = font;
      const width = Math.ceil(ctx.measureText(text).width + 2);
      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(lineHeight * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${lineHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, lineHeight);
      ctx.font = font;
      ctx.fillStyle = styles.color;
      ctx.textBaseline = "middle";
      ctx.fillText(text, 1, lineHeight / 2);
    };

    const redraw = () => {
      window.requestAnimationFrame(draw);
      window.setTimeout(draw, 80);
      window.setTimeout(draw, 360);
    };

    draw();
    void document.fonts?.ready?.then(draw);

    const host = canvas.closest("a,button") || canvas.parentElement;
    host?.addEventListener("mouseenter", redraw);
    host?.addEventListener("mouseleave", redraw);
    host?.addEventListener("focus", redraw);
    host?.addEventListener("blur", redraw);
    host?.addEventListener("transitionend", redraw);
    window.addEventListener("resize", draw);

    const observer = new MutationObserver(redraw);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "style"] });

    return () => {
      host?.removeEventListener("mouseenter", redraw);
      host?.removeEventListener("mouseleave", redraw);
      host?.removeEventListener("focus", redraw);
      host?.removeEventListener("blur", redraw);
      host?.removeEventListener("transitionend", redraw);
      window.removeEventListener("resize", draw);
      observer.disconnect();
    };
  }, [data]);

  return <canvas ref={ref} className={`obf-text ${className}`} aria-hidden="true" />;
}

type ObfProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  d: readonly number[];
  kind?: "url" | "mail" | "tel";
  children: ReactNode;
};

export function Obf({ d, kind = "url", children, ...rest }: ObfProps) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const raw = dec(d);
    if (!raw) return;

    if (kind === "mail") window.location.href = `mailto:${raw}`;
    else if (kind === "tel") window.location.href = `tel:${raw}`;
    else window.open(raw, "_blank", "noopener,noreferrer");
  };

  return (
    <a href="#contact" onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
