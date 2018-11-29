const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('precss'),
    require('postcss-nested'),
    require('postcss-mixins'),
    // require('postcss-math'),
    require('postcss-initial'),
    require('postcss-import'),
    // require('postcss-color-function'),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
};
