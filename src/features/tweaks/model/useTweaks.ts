import { useCallback, useState } from "react";
import type { SetTweak, TweakRecord } from "./types";

function isEditObject<T extends TweakRecord>(value: unknown): value is Partial<T> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function useTweaks<T extends TweakRecord>(defaults: T): readonly [T, SetTweak<T>] {
  const [values, setValues] = useState<T>(defaults);

  const setTweak: SetTweak<T> = useCallback((keyOrEdits: keyof T | Partial<T>, value?: T[keyof T]) => {
    const edits = isEditObject<T>(keyOrEdits)
      ? keyOrEdits
      : ({ [keyOrEdits]: value } as Partial<T>);

    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
    window.dispatchEvent(new CustomEvent("tweakchange", { detail: edits }));
  }, []);

  return [values, setTweak] as const;
}
