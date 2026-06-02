import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { TweakSection } from "./layout";
import { TweakToggle } from "./controls";
import { TWEAKS_STYLE } from "./styles";

type MessagePayload = {
  type?: unknown;
};

type DeckStageElement = HTMLElement & {
  _railEnabled?: boolean;
};

type PanelOffset = {
  x: number;
  y: number;
};

type TweaksPanelProps = {
  title?: string;
  noDeckControls?: boolean;
  children?: ReactNode;
};

function messageType(data: unknown): string | undefined {
  if (typeof data !== "object" || data === null) return undefined;
  const payload = data as MessagePayload;
  return typeof payload.type === "string" ? payload.type : undefined;
}

function getDeckStage(): DeckStageElement | null {
  return document.querySelector<DeckStageElement>("deck-stage");
}

export function TweaksPanel({
  title = "Tweaks",
  noDeckControls = false,
  children,
}: TweaksPanelProps) {
  const [open, setOpen] = useState(false);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const hasDeckStage = useMemo(() => typeof document !== "undefined" && getDeckStage() !== null, []);
  const [railEnabled, setRailEnabled] = useState(() => hasDeckStage && Boolean(getDeckStage()?._railEnabled));
  const [railVisible, setRailVisible] = useState(() => {
    try {
      return localStorage.getItem("deck-stage.railVisible") !== "0";
    } catch {
      return true;
    }
  });
  const offsetRef = useRef<PanelOffset>({ x: 16, y: 16 });
  const pad = 16;

  useEffect(() => {
    if (!hasDeckStage || railEnabled) return;

    const onMsg = (event: MessageEvent<unknown>) => {
      if (messageType(event.data) === "__omelette_rail_enabled") setRailEnabled(true);
    };

    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [hasDeckStage, railEnabled]);

  const toggleRail = (on: boolean) => {
    setRailVisible(on);
    window.postMessage({ type: "__deck_rail_visible", on }, "*");
  };

  const clampToViewport = useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;

    const maxRight = Math.max(pad, window.innerWidth - panel.offsetWidth - pad);
    const maxBottom = Math.max(pad, window.innerHeight - panel.offsetHeight - pad);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(pad, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(pad, offsetRef.current.y)),
    };
    panel.style.right = `${offsetRef.current.x}px`;
    panel.style.bottom = `${offsetRef.current.y}px`;
  }, []);

  useEffect(() => {
    if (!open) return;

    clampToViewport();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", clampToViewport);
      return () => window.removeEventListener("resize", clampToViewport);
    }

    const observer = new ResizeObserver(clampToViewport);
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, [open, clampToViewport]);

  useEffect(() => {
    const onMsg = (event: MessageEvent<unknown>) => {
      const type = messageType(event.data);
      if (type === "__activate_edit_mode") setOpen(true);
      else if (type === "__deactivate_edit_mode") setOpen(false);
    };

    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
  };

  const onDragStart = (event: MouseEvent<HTMLDivElement>) => {
    const panel = dragRef.current;
    if (!panel) return;

    const rect = panel.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const startRight = window.innerWidth - rect.right;
    const startBottom = window.innerHeight - rect.bottom;

    const move = (moveEvent: globalThis.MouseEvent) => {
      offsetRef.current = {
        x: startRight - (moveEvent.clientX - startX),
        y: startBottom - (moveEvent.clientY - startY),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  if (!open) return null;

  return (
    <>
      <style>{TWEAKS_STYLE}</style>
      <div
        ref={dragRef}
        className="twk-panel"
        data-noncommentable=""
        style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}
      >
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button
            className="twk-x"
            aria-label="Close tweaks"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={dismiss}
          >
            x
          </button>
        </div>
        <div className="twk-body">
          {children}
          {hasDeckStage && railEnabled && !noDeckControls && (
            <TweakSection label="Deck">
              <TweakToggle label="Thumbnail rail" value={railVisible} onChange={toggleRail} />
            </TweakSection>
          )}
        </div>
      </div>
    </>
  );
}
