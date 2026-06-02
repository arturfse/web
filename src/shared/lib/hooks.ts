import { useEffect, useState, useSyncExternalStore, type RefObject } from "react";

type VisibilityCallback = (visible: boolean) => void;

type VisibilityListener = {
  callback: VisibilityCallback;
  once: boolean;
};

type ObserverBucket = {
  observer: IntersectionObserver;
  listeners: Map<Element, Set<VisibilityListener>>;
};

const observerBuckets = new Map<string, ObserverBucket>();

function observerKey(rootMargin: string, threshold: number): string {
  return `${rootMargin}|${threshold}`;
}

function getObserverBucket(rootMargin: string, threshold: number): ObserverBucket | null {
  if (typeof IntersectionObserver === "undefined") return null;

  const key = observerKey(rootMargin, threshold);
  const existing = observerBuckets.get(key);
  if (existing) return existing;

  const bucket: ObserverBucket = {
    listeners: new Map<Element, Set<VisibilityListener>>(),
    observer: new IntersectionObserver((entries) => {
      const currentBucket = observerBuckets.get(key);
      if (!currentBucket) return;

      for (const entry of entries) {
        const listeners = currentBucket.listeners.get(entry.target);
        if (!listeners) continue;

        for (const listener of [...listeners]) {
          listener.callback(entry.isIntersecting);
          if (listener.once && entry.isIntersecting) {
            listeners.delete(listener);
          }
        }

        if (listeners.size === 0) {
          currentBucket.listeners.delete(entry.target);
          currentBucket.observer.unobserve(entry.target);
        }
      }
    }, { rootMargin, threshold }),
  };

  observerBuckets.set(key, bucket);
  return bucket;
}

function observeVisibility(
  element: Element,
  callback: VisibilityCallback,
  {
    rootMargin = "0px",
    threshold = 0,
    once = false,
  }: {
    rootMargin?: string;
    threshold?: number;
    once?: boolean;
  } = {},
): () => void {
  const bucket = getObserverBucket(rootMargin, threshold);
  if (!bucket) {
    callback(true);
    return () => undefined;
  }

  const listener: VisibilityListener = { callback, once };
  const listeners = bucket.listeners.get(element) ?? new Set<VisibilityListener>();
  listeners.add(listener);
  bucket.listeners.set(element, listeners);
  bucket.observer.observe(element);

  return () => {
    const currentListeners = bucket.listeners.get(element);
    currentListeners?.delete(listener);
    if (currentListeners && currentListeners.size > 0) return;

    bucket.listeners.delete(element);
    bucket.observer.unobserve(element);
  };
}

export function useInView(ref: RefObject<Element | null>): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return observeVisibility(element, (visible) => {
      if (visible) setInView(true);
    }, { threshold: 0.15, once: true });
  }, [ref]);

  return inView;
}

export function useNearViewport(ref: RefObject<Element | null>, rootMargin = "900px"): boolean {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return observeVisibility(element, (visible) => {
      if (visible) setNear(true);
    }, { rootMargin, once: true });
  }, [ref, rootMargin]);

  return near;
}

export function useElementVisible(ref: RefObject<Element | null>, rootMargin = "0px"): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return observeVisibility(element, setVisible, { rootMargin });
  }, [ref, rootMargin]);

  return visible;
}

type ScrollSnapshot = {
  activeSection: string;
  progress: number;
  stickyCtaVisible: boolean;
};

const scrollListeners = new Set<() => void>();
let scrollSectionIds: readonly string[] = [];
let scrollSnapshot: ScrollSnapshot = {
  activeSection: "",
  progress: 0,
  stickyCtaVisible: false,
};
let scrollRaf = 0;
let scrollListening = false;

function sameScrollSnapshot(a: ScrollSnapshot, b: ScrollSnapshot): boolean {
  return (
    a.activeSection === b.activeSection
    && a.progress === b.progress
    && a.stickyCtaVisible === b.stickyCtaVisible
  );
}

function readScrollSnapshot(): ScrollSnapshot {
  if (typeof window === "undefined") return scrollSnapshot;

  const doc = document.documentElement;
  const viewportHeight = window.innerHeight || doc.clientHeight || 1;
  const max = Math.max(0, doc.scrollHeight - viewportHeight);
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  const anchor = viewportHeight * 0.4;
  let activeSection = scrollSectionIds[0] ?? "";
  let bestDist = Infinity;

  for (const id of scrollSectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;

    const rect = el.getBoundingClientRect();
    if (rect.top <= anchor && rect.bottom > anchor) {
      activeSection = id;
      break;
    }

    const dist = Math.abs(rect.top - anchor);
    if (rect.top <= anchor && dist < bestDist) {
      activeSection = id;
      bestDist = dist;
    }
  }

  const contactEl = document.getElementById("contact");
  const contactTop = contactEl ? contactEl.getBoundingClientRect().top : Infinity;

  return {
    activeSection,
    progress,
    stickyCtaVisible: window.scrollY > viewportHeight * 0.6 && contactTop > viewportHeight * 0.7,
  };
}

function emitScrollSnapshot(): void {
  scrollRaf = 0;
  const next = readScrollSnapshot();
  if (sameScrollSnapshot(scrollSnapshot, next)) return;

  scrollSnapshot = next;
  scrollListeners.forEach((listener) => listener());
}

function scheduleScrollSnapshot(): void {
  if (scrollRaf) return;
  scrollRaf = window.requestAnimationFrame(emitScrollSnapshot);
}

function startScrollListener(): void {
  if (scrollListening || typeof window === "undefined") return;

  scrollListening = true;
  scrollSnapshot = readScrollSnapshot();
  window.addEventListener("scroll", scheduleScrollSnapshot, { passive: true });
  window.addEventListener("resize", scheduleScrollSnapshot);
}

function stopScrollListener(): void {
  if (!scrollListening || typeof window === "undefined") return;

  scrollListening = false;
  window.removeEventListener("scroll", scheduleScrollSnapshot);
  window.removeEventListener("resize", scheduleScrollSnapshot);
  if (scrollRaf) {
    window.cancelAnimationFrame(scrollRaf);
    scrollRaf = 0;
  }
}

function subscribeScroll(listener: () => void): () => void {
  scrollListeners.add(listener);
  startScrollListener();
  scheduleScrollSnapshot();

  return () => {
    scrollListeners.delete(listener);
    if (scrollListeners.size === 0) stopScrollListener();
  };
}

function getScrollSnapshot(): ScrollSnapshot {
  return scrollSnapshot;
}

function useSharedScrollSnapshot(): ScrollSnapshot {
  return useSyncExternalStore(subscribeScroll, getScrollSnapshot, getScrollSnapshot);
}

export function useScrollProgress(): number {
  return useSharedScrollSnapshot().progress;
}

export function useActiveSection(ids: readonly string[]): string {
  useEffect(() => {
    scrollSectionIds = ids;
    if (typeof window !== "undefined") scheduleScrollSnapshot();
  }, [ids]);

  return useSharedScrollSnapshot().activeSection || ids[0] || "";
}

export function useStickyCtaVisible(): boolean {
  return useSharedScrollSnapshot().stickyCtaVisible;
}
