module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/journal/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/journal/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/journal/**/*.png");
  eleventyConfig.addPassthroughCopy("src/journal/**/*.webp");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
