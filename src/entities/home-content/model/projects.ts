export const PROJECTS = [
  {
    tag: "AI · Telegram",
    title: "StickIO Bot",
    desc: "A Telegram bot that turns prompts into sticker packs. Image pipeline, generation queue, all hidden behind one chat message.",
    stack: ["Node.js", "NestJS", "AI pipeline"],
    href: "https://t.me/stickio_bot",
    preview: "bot",
  },
  {
    tag: "Open Source",
    title: "Headless UI for React",
    desc: "Production-ready headless components. Accessible, unstyled, zero runtime dependencies.",
    stack: ["React", "TypeScript", "A11y"],
    href: "https://github.com/arslanov-artur/react-headless-ui-collection",
    preview: "ui",
  },
  {
    tag: "PWA",
    title: "Offline-first Messenger",
    desc: "A Progressive Web App messenger with offline sync, push notifications, and end-to-end encryption. WebSockets when online, IndexedDB when the metro goes underground.",
    stack: ["PWA", "WebSockets", "E2E"],
    href: "https://github.com/arslanov-artur/messenger-pwa",
    preview: "msg",
  },
] as const;
