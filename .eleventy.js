module.exports = function (eleventyConfig) {
  // eleventyConfig.setTemplateFormats(["md", "css", "jpg", "png","pdf"]);
  eleventyConfig.addPassthroughCopy("assets");
};
