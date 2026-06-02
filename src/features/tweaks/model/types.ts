import type { ReactNode } from "react";

export type TweakRecord = object;

export type SetTweak<T extends TweakRecord> = {
  <K extends keyof T>(key: K, value: T[K]): void;
  (edits: Partial<T>): void;
};

export type TweakOptionValue = string | number | boolean | readonly string[];

export type TweakOption<T extends TweakOptionValue> =
  | T
  | {
      value: T;
      label: ReactNode;
    };
