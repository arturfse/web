import { copyFile, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { transformSync } from "@babel/core";

const root = process.cwd();
const outDir = join(root, "dist");

const pages = [
  {
    source: "index.html",
    scripts: [
      ["tweaks-panel.jsx", "tweaks-panel.js"],
      ["app.jsx", "app.js"],
    ],
  },
  {
    source: "Portfolio Editorial.html",
    scripts: [
      ["tweaks-panel.jsx", "tweaks-panel.js"],
      ["app-editorial.jsx", "app-editorial.js"],
    ],
  },
];

const assets = [
  "CNAME",
  "icon.png",
  "icon.svg",
  "styles.css",
  "styles-editorial.css",
  "screenshots",
  "uploads",
];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const asset of assets) {
  const from = join(root, asset);
  const to = join(outDir, asset);
  try {
    await cp(from, to, { recursive: true });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

const compiled = new Set();

for (const page of pages) {
  for (const [source, target] of page.scripts) {
    const key = `${source}:${target}`;
    if (compiled.has(key)) continue;
    compiled.add(key);

    const input = await readFile(join(root, source), "utf8");
    const output = transformSync(input, {
      filename: source,
      presets: [["@babel/preset-react", { runtime: "classic" }]],
      comments: false,
      compact: false,
    });

    const targetPath = join(outDir, target);
    await mkdir(dirname(targetPath), { recursive: true });
    await writeFile(targetPath, `${output.code}\n`);
  }
}

for (const page of pages) {
  let html = await readFile(join(root, page.source), "utf8");

  html = html
    .replace(
      /<script src="https:\/\/unpkg\.com\/react@18\.3\.1\/umd\/react\.development\.js"[^>]*><\/script>/,
      '<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>',
    )
    .replace(
      /<script src="https:\/\/unpkg\.com\/react-dom@18\.3\.1\/umd\/react-dom\.development\.js"[^>]*><\/script>/,
      '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>',
    )
    .replace(/\n\s*<script src="https:\/\/unpkg\.com\/@babel\/standalone@[^>]*><\/script>/, "");

  for (const [source, target] of page.scripts) {
    html = html.replace(
      new RegExp(`<script type="text/babel" src="${source}"></script>`, "g"),
      `<script defer src="${target}"></script>`,
    );
  }

  await copyFile(join(root, page.source), join(outDir, page.source));
  await writeFile(join(outDir, page.source), html);
}

console.log(`Built ${outDir}`);
