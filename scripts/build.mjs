import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { transformSync } from "@babel/core";

const root = process.cwd();
const srcDir = join(root, "src");
const outDir = root;

const pages = [
  {
    source: "index.html",
    scripts: [
      ["tweaks-panel.jsx", "tweaks-panel.js"],
      ["app.jsx", "app.js"],
    ],
  },
  {
    source: "portfolio-editorial.html",
    target: "Portfolio Editorial.html",
    scripts: [
      ["tweaks-panel.jsx", "tweaks-panel.js"],
      ["app-editorial.jsx", "app-editorial.js"],
    ],
  },
];

const styles = ["styles.css", "styles-editorial.css"];

await mkdir(outDir, { recursive: true });

const compiled = new Set();

for (const page of pages) {
  for (const [source, target] of page.scripts) {
    const key = `${source}:${target}`;
    if (compiled.has(key)) continue;
    compiled.add(key);

    const input = await readFile(join(srcDir, source), "utf8");
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

for (const style of styles) {
  const input = await readFile(join(srcDir, style), "utf8");
  await writeFile(join(outDir, style), input);
}

for (const page of pages) {
  let html = await readFile(join(srcDir, page.source), "utf8");

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

  await writeFile(join(outDir, page.target || page.source), html);
}

console.log(`Built production files into ${outDir}`);
