import { useRef, useState, type ChangeEvent, type PointerEvent, type ReactNode } from "react";
import type { TweakOption, TweakOptionValue } from "../model/types";
import { TweakRow } from "./layout";

function isOptionObject<T extends TweakOptionValue>(
  option: TweakOption<T>,
): option is { value: T; label: ReactNode } {
  return typeof option === "object" && option !== null && !Array.isArray(option);
}

function optionValue<T extends TweakOptionValue>(option: TweakOption<T>): T {
  return isOptionObject(option) ? option.value : option;
}

function optionLabel<T extends TweakOptionValue>(option: TweakOption<T>): ReactNode {
  return isOptionObject(option) ? option.label : String(option);
}

function optionKey(value: TweakOptionValue): string {
  return Array.isArray(value) ? value.join("|") : String(value);
}

function optionSelectValue(value: TweakOptionValue): string {
  return JSON.stringify(value);
}

function optionLabelLength<T extends TweakOptionValue>(option: TweakOption<T>): number {
  const label = optionLabel(option);
  if (typeof label === "string" || typeof label === "number" || typeof label === "boolean") {
    return String(label).length;
  }
  return optionKey(optionValue(option)).length;
}

type TweakSliderProps = {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
};

export function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = "",
  onChange,
}: TweakSliderProps) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input
        type="range"
        className="twk-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </TweakRow>
  );
}

type TweakToggleProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

export function TweakToggle({ label, value, onChange }: TweakToggleProps) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl">
        <span>{label}</span>
      </div>
      <button
        type="button"
        className="twk-toggle"
        data-on={value ? "1" : "0"}
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
      >
        <i />
      </button>
    </div>
  );
}

type TweakRadioProps<T extends TweakOptionValue> = {
  label: string;
  value: T;
  options: readonly TweakOption<T>[];
  onChange: (value: T) => void;
};

export function TweakRadio<T extends TweakOptionValue>({
  label,
  value,
  options,
  onChange,
}: TweakRadioProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const valueRef = useRef(value);
  valueRef.current = value;

  const maxLen = options.reduce((max, option) => Math.max(max, optionLabelLength(option)), 0);
  const maxByCount: Record<number, number> = { 2: 16, 3: 10 };
  const fitsAsSegments = maxLen <= (maxByCount[options.length] ?? 0);

  if (!fitsAsSegments) {
    return (
      <TweakSelect
        label={label}
        value={value}
        options={options}
        onChange={onChange}
      />
    );
  }

  const opts = options.map((option) => ({
    value: optionValue(option),
    label: optionLabel(option),
  }));
  const idx = Math.max(0, opts.findIndex((option) => optionValue(option.value) === value));
  const count = opts.length;

  const segAt = (clientX: number): T | undefined => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect || count === 0) return undefined;

    const inner = rect.width - 4;
    const rawIndex = Math.floor(((clientX - rect.left - 2) / inner) * count);
    const safeIndex = Math.max(0, Math.min(count - 1, rawIndex));
    return opts[safeIndex]?.value;
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    const nextValue = segAt(event.clientX);
    if (nextValue !== undefined && nextValue !== valueRef.current) onChange(nextValue);

    const move = (moveEvent: globalThis.PointerEvent) => {
      const movedValue = segAt(moveEvent.clientX);
      if (movedValue !== undefined && movedValue !== valueRef.current) onChange(movedValue);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <TweakRow label={label}>
      <div
        ref={trackRef}
        role="radiogroup"
        onPointerDown={onPointerDown}
        className={dragging ? "twk-seg dragging" : "twk-seg"}
      >
        <div
          className="twk-seg-thumb"
          style={{
            left: `calc(2px + ${idx} * (100% - 4px) / ${count})`,
            width: `calc((100% - 4px) / ${count})`,
          }}
        />
        {opts.map((option) => (
          <button
            key={optionKey(option.value)}
            type="button"
            role="radio"
            aria-checked={option.value === value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

type TweakSelectProps<T extends TweakOptionValue> = {
  label: string;
  value: T;
  options: readonly TweakOption<T>[];
  onChange: (value: T) => void;
};

export function TweakSelect<T extends TweakOptionValue>({
  label,
  value,
  options,
  onChange,
}: TweakSelectProps<T>) {
  const resolve = (selectValue: string): T => {
    const match = options.find((option) => optionSelectValue(optionValue(option)) === selectValue);
    return match === undefined ? value : optionValue(match);
  };

  return (
    <TweakRow label={label}>
      <select
        className="twk-field"
        value={optionSelectValue(value)}
        onChange={(event) => onChange(resolve(event.target.value))}
      >
        {options.map((option) => {
          const valueForOption = optionValue(option);
          return (
            <option key={optionKey(valueForOption)} value={optionSelectValue(valueForOption)}>
              {optionLabel(option)}
            </option>
          );
        })}
      </select>
    </TweakRow>
  );
}

type TweakTextProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export function TweakText({ label, value, placeholder, onChange }: TweakTextProps) {
  return (
    <TweakRow label={label}>
      <input
        className="twk-field"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </TweakRow>
  );
}

type TweakNumberProps = {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
};

export function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
}: TweakNumberProps) {
  const clamp = (next: number): number => {
    if (min != null && next < min) return min;
    if (max != null && next > max) return max;
    return next;
  };
  const startRef = useRef({ x: 0, val: 0 });

  const onScrubStart = (event: PointerEvent<HTMLSpanElement>) => {
    event.preventDefault();
    startRef.current = { x: event.clientX, val: value };
    const decimals = (String(step).split(".")[1] || "").length;

    const move = (moveEvent: globalThis.PointerEvent) => {
      const dx = moveEvent.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>
        {label}
      </span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(clamp(Number(event.target.value)))}
      />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

type ColorOption = string | readonly string[];

type TweakColorProps<T extends ColorOption> = {
  label: string;
  value: T;
  options?: readonly T[];
  onChange: (value: T) => void;
};

function isLightHex(hex: string): boolean {
  const raw = hex.replace("#", "");
  const expanded = raw.length === 3 ? raw.replace(/./g, (char) => char + char) : raw.padEnd(6, "0");
  const num = parseInt(expanded.slice(0, 6), 16);
  if (Number.isNaN(num)) return true;

  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

type TweakCheckProps = {
  light: boolean;
};

function TweakCheck({ light }: TweakCheckProps) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M3 7.2 5.8 10 11 4.2"
        fill="none"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={light ? "rgba(0,0,0,.78)" : "#fff"}
      />
    </svg>
  );
}

export function TweakColor<T extends ColorOption>({
  label,
  value,
  options,
  onChange,
}: TweakColorProps<T>) {
  const onNativeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as T);
  };

  if (!options || options.length === 0) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl">
          <span>{label}</span>
        </div>
        <input type="color" className="twk-swatch" value={String(value)} onChange={onNativeChange} />
      </div>
    );
  }

  const key = (option: ColorOption) => String(JSON.stringify(option)).toLowerCase();
  const current = key(value);

  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((option) => {
          const colors = (Array.isArray(option) ? option : [option]) as readonly string[];
          const hero = colors[0] ?? "#000000";
          const supportColors = colors.slice(1, 5);
          const isSelected = key(option) === current;

          return (
            <button
              key={key(option)}
              type="button"
              className="twk-chip"
              role="radio"
              aria-checked={isSelected}
              data-on={isSelected ? "1" : "0"}
              aria-label={colors.join(", ")}
              title={colors.join(" · ")}
              style={{ background: hero }}
              onClick={() => onChange(option)}
            >
              {supportColors.length > 0 && (
                <span>
                  {supportColors.map((color) => (
                    <i key={color} style={{ background: color }} />
                  ))}
                </span>
              )}
              {isSelected && <TweakCheck light={isLightHex(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

type TweakButtonProps = {
  label: string;
  onClick: () => void;
  secondary?: boolean;
};

export function TweakButton({ label, onClick, secondary = false }: TweakButtonProps) {
  return (
    <button
      type="button"
      className={secondary ? "twk-btn secondary" : "twk-btn"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
