const fs = require("fs");
const path = require("path");

const BASE_URL = "https://gujjuskills.com";

const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");

function getMarkdownFiles(dir) {
  let files = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getMarkdownFiles(fullPath));
    } else if (file.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = getMarkdownFiles(contentDir);

const urls = new Set();

urls.add(`${BASE_URL}/`);

files.forEach((file) => {
  const relativePath = path.relative(contentDir, file);

  let urlPath = relativePath
    .replace(/\\/g, "/")
    .replace(/\.md$/, "");

  // Ignore special files
  if (
    urlPath === "404" ||
    urlPath === "_index"
  ) {
    return;
  }

  urls.add(`${BASE_URL}/${urlPath}/`);
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urls)
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(
  path.join(publicDir, "sitemap.xml"),
  sitemap,
  "utf8"
);

console.log(`Sitemap generated: ${urls.size} URLs`);
