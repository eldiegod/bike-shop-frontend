// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = {
    content: ['public/index.html', 'src/**/*.jsx', 'src/**/*.js'],
    css: ['src/styles/bundle.css'],
    extractors: [
      {
        extractor: TailwindExtractor,

        // Specify the file extensions to include when scanning for
        // class names.
        extensions: ["html", "js", "jsx"]
      }
    ],
    fontFace: true,
    // keyframes: true
    // whitelist: ['html', 'body'],
    //whitelisting bootsrap col classes so they are not a pain in the ass later
    whitelistPatterns: [/col-xs-([0-9])+/, /col-sm-([0-9])+/, /col-md-([0-9])+/, /col-lg-([0-9])+/]
}
