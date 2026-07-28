const fs = require("node:fs");
const path = require("node:path");
const site = require("./site.json");

const galleryRoot = path.join(__dirname, "..", "assets", "gallery");
const imagePattern = /\.(avif|gif|jpe?g|png|webp)$/i;

function titleFromFolder(folder) {
  return folder
    .replace(/^\d{6,8}[-_]?/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

module.exports = function () {
  if (!fs.existsSync(galleryRoot)) return [];

  const configuredEvents = new Map(
    (site.galleryEvents || []).map((event) => [event.folder, event])
  );

  return fs
    .readdirSync(galleryRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const folder = entry.name;
      const metadata = configuredEvents.get(folder) || {};
      const directory = path.join(galleryRoot, folder);
      const filenames = fs
        .readdirSync(directory)
        .filter((filename) => imagePattern.test(filename))
        .sort((a, b) => a.localeCompare(b));
      const title = metadata.title || titleFromFolder(folder);
      const cover = filenames.includes(metadata.cover)
        ? metadata.cover
        : filenames[0];

      return {
        folder,
        title,
        date: metadata.date || "",
        sortDate: metadata.sortDate || folder,
        location: metadata.location || "",
        type: metadata.type || "Gallery",
        summary: metadata.summary || "",
        featured: Boolean(metadata.featured),
        cover: cover ? `/assets/gallery/${folder}/${cover}` : "",
        images: filenames.map((filename, index) => ({
          src: `/assets/gallery/${folder}/${filename}`,
          filename,
          alt:
            (metadata.imageAlts && metadata.imageAlts[filename]) ||
            `${title}, photograph ${index + 1}`
        }))
      };
    })
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate));
};
