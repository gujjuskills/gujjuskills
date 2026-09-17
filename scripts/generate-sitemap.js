const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BASE_URL = "https://gujjuskills.com";

const contentDir = path.join(process.cwd(), "content");
const postsDir = path.join(contentDir, "posts");
const publicDir = path.join(process.cwd(), "public");

const urls = new Set();

function addUrl(url) {
  urls.add(url);
}

// Homepage
addUrl(`${BASE_URL}/`);

// Read Markdown files
function getMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"));
}

// -------------------------
// Regular pages
// -------------------------

const regularFiles = getMarkdownFiles(contentDir);

regularFiles.forEach((file) => {
  if (file === "_index.md" || file === "404.md") {
    return;
  }

  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  // Skip draft pages
  if (data.draft === true) {
    return;
  }

  // Skip 404 pages
  if (data.layout === "404") {
    return;
  }

  // Skip noindex pages
  if (data.noindex === true) {
    return;
  }

  // Skip future pages
  if (data.date && new Date(data.date) > new Date()) {
    return;
  }

  const slug = data.url
    ? data.url.replace(/^\/+|\/+$/g, "")
    : file.replace(/\.md$/, "");

  if (slug) {
    addUrl(`${BASE_URL}/${slug}/`);
  }
});

// -------------------------
// Blog posts
// -------------------------

const postFiles = getMarkdownFiles(postsDir);

postFiles.forEach((file) => {
  if (file === "_index.md") {
    return;
  }

  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  // Skip drafts
  if (data.draft === true) {
    return;
  }

  // Skip 404
  if (data.layout === "404") {
    return;
  }

  // Skip noindex
  if (data.noindex === true) {
    return;
  }

  // Skip future posts
  if (data.date && new Date(data.date) > new Date()) {
    return;
  }

  const slug = data.url
    ? data.url.replace(/^\/+|\/+$/g, "")
    : file.replace(/\.md$/, "");

  if (slug) {
    addUrl(`${BASE_URL}/posts/${slug}/`);
  }
});

// -------------------------
// Categories
// -------------------------

const categories = new Set();

postFiles.forEach((file) => {
  if (file === "_index.md") {
    return;
  }

  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  if (data.draft === true) {
    return;
  }

  if (!data.categories) {
    return;
  }

  const categoryList = Array.isArray(data.categories)
    ? data.categories
    : [data.categories];

  categoryList.forEach((category) => {
    if (category) {
      categories.add(
        String(category)
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
      );
    }
  });
});

addUrl(`${BASE_URL}/categories/`);

categories.forEach((category) => {
  addUrl(`${BASE_URL}/categories/${category}/`);
});

// -------------------------
// Blog pagination
// -------------------------

const pagination = 6;

const publishedPosts = postFiles.filter((file) => {
  if (file === "_index.md") {
    return false;
  }

  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  return (
    data.draft !== true &&
    data.layout !== "404" &&
    data.noindex !== true &&
    (!data.date || new Date(data.date) <= new Date())
  );
});

const totalPages = Math.ceil(publishedPosts.length / pagination);

for (let page = 2; page <= totalPages; page++) {
  addUrl(`${BASE_URL}/page/${page}/`);
}

// -------------------------
// Generate sitemap
// -------------------------

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urls)
  .sort()
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapPath = path.join(publicDir, "sitemap.xml");

fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log(`✅ Sitemap generated successfully: ${urls.size} URLs`);
console.log(`📄 ${sitemapPath}`);
