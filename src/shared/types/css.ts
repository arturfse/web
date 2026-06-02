import type { CSSProperties } from "react";

export type CSSVarStyle = CSSProperties & Record<`--${string}`, string | number>;
