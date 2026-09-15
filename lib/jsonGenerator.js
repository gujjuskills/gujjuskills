const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const sharp = require("sharp");

const config = require("../config/config.json");
const { blog_folder } = config.settings;

const jsonDir = "./.json";
const postsDir = path.join(`content/${blog_folder}`);
const imageDir = "./public/images/post";

async function createThumbnails() {
  if (!fs.existsSync(imageDir)) return;

  const files = fs.readdirSync(imageDir);

  for (const file of files) {
    if (!/\.(png|jpg|jpeg|webp)$/i.test(file)) continue;

    // Don't process thumbnails again
    if (file.includes("-thumb")) continue;

    const input = path.join(imageDir, file);
    const name = path.parse(file).name;
    const output = path.join(imageDir, `${name}-thumb.webp`);

    try {
      await sharp(input)
        .resize(330, 170, { fit: "cover" })
        .webp({ quality: 80 })
        .toFile(output);

      console.log(`Thumbnail created: ${name}-thumb.webp`);
    } catch (error) {
      console.error(`Image error: ${file}`, error.message);
    }
  }
}

async function generate() {
  const getPosts = fs.readdirSync(postsDir);
  const filterPosts = getPosts.filter((post) => post.match(/^(?!_)/));

  const posts = filterPosts.map((filename) => {
    const slug = filename.replace(".md", "");
    const postData = fs.readFileSync(
      path.join(postsDir, filename),
      "utf-8"
    );

    const { data, content } = matter(postData);

    return {
      frontmatter: data,
      content,
      slug,
    };
  });

  try {
    if (!fs.existsSync(jsonDir)) {
      fs.mkdirSync(jsonDir);
    }

    fs.writeFileSync(
      `${jsonDir}/posts.json`,
      JSON.stringify(posts)
    );

    await createThumbnails();

    console.log("✅ JSON and thumbnails generated");
  } catch (err) {
    console.error(err);
  }
}

generate();
