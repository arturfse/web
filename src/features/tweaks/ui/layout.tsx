import type { ReactNode } from "react";

type TweakSectionProps = {
  label: string;
  children?: ReactNode;
};

export function TweakSection({ label, children }: TweakSectionProps) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

type TweakRowProps = {
  label: string;
  value?: ReactNode;
  children?: ReactNode;
  inline?: boolean;
};

export function TweakRow({ label, value, children, inline = false }: TweakRowProps) {
  return (
    <div className={inline ? "twk-row twk-row-h" : "twk-row"}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}
