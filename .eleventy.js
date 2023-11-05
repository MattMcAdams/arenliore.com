const { DateTime } = require("luxon");
const fs = require("fs");
// const markdownIt = require("markdown-it");
// const markdownItAnchor = require("markdown-it-anchor");
// const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  /* ==================================================================
  Add Plugins
  ================================================================== */
  // eleventyConfig.addPlugin(pluginRss);
  /* ==================================================================
  Data Deep Merge
  https://www.11ty.dev/docs/data-deep-merge/
  ================================================================== */
  eleventyConfig.setDataDeepMerge(true);
  /* ==================================================================
  Date Filters
  ================================================================== */
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLLL yyyy"
    );
  });
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });
  /* ==================================================================
  General Filters
  ================================================================== */
  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });
  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });
  /* ==================================================================
  Enable static passthrough
  ================================================================== */
  eleventyConfig.addPassthroughCopy({ "src/_static/": "/" });
  /* ==================================================================
  Customize Markdown library and settings
  ================================================================== */
  // let markdownLibrary = markdownIt({
  //   html: true,
  //   breaks: true,
  //   linkify: true,
  // }).use(markdownItAnchor, {
  //   permalink: true,
  //   permalinkClass: "direct-link",
  //   permalinkSymbol: "#",
  // });
  // eleventyConfig.setLibrary("md", markdownLibrary);
  /* ==================================================================
  Override Browsersync defaults (used only with --serve)
  ================================================================== */
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });
  /* ==================================================================
  RETURN
  ================================================================== */
  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md files with:
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with:
    htmlTemplateEngine: "njk",

    // Opt-out of pre-processing global data JSON files:
    dataTemplateEngine: false,

    // Set directories
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };
};;
