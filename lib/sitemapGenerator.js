const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const SITE_URL = "https://gujjuskills.com";
const contentDir = path.join(process.cwd(), "content");
const postsDir = path.join(contentDir, "posts");
const publicDir = path.join(process.cwd(), "public");

function getMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"));
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function addUrl(urls, urlPath, lastmod) {
  urls.push({
    loc: `${SITE_URL}${urlPath}`,
    lastmod,
  });
}

function generateSitemap() {
  const urls = [];
  const now = new Date().toISOString();

  // Home page
  addUrl(urls, "/", now);

  // Regular content pages
  for (const file of getMarkdownFiles(contentDir)) {
    const filePath = path.join(contentDir, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);

    if (data.noindex === true || data.noindex === "true") {
      continue;
    }

    const slug = file.replace(/\.md$/, "");

    addUrl(urls, `/${slug}/`, now);
  }

  // Blog posts
  const postFiles = getMarkdownFiles(postsDir);

  for (const file of postFiles) {
    const filePath = path.join(postsDir, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);

    if (data.noindex === true || data.noindex === "true") {
      continue;
    }

    const slug = file.replace(/\.md$/, "");

    let lastmod = now;

    if (data.date) {
      const date = new Date(data.date);

      if (!Number.isNaN(date.getTime())) {
        lastmod = date.toISOString();
      }
    }

    addUrl(urls, `/posts/${slug}/`, lastmod);
  }

  // Blog pagination
  const postsPerPage = 6;
  const totalPages = Math.ceil(postFiles.length / postsPerPage);

  for (let page = 2; page <= totalPages; page++) {
    addUrl(urls, `/page/${page}/`, now);
  }

  // Category pages
  const categories = new Set();

  for (const file of postFiles) {
    const filePath = path.join(postsDir, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);

    if (Array.isArray(data.categories)) {
      data.categories.forEach((category) => {
        const slug = slugify(category);

        if (slug) {
          categories.add(slug);
        }
      });
    }
  }

  for (const category of categories) {
    addUrl(urls, `/categories/${category}/`, now);
  }

  // Remove duplicate URLs
  const uniqueUrls = Array.from(
    new Map(urls.map((item) => [item.loc, item])).values()
  );

  // Create sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  fs.mkdirSync(publicDir, { recursive: true });

  fs.writeFileSync(
    path.join(publicDir, "sitemap.xml"),
    xml,
    "utf8"
  );

  console.log(`✅ Sitemap generated with ${uniqueUrls.length} URLs`);
}

generateSitemap();
