// https://github.com/michael-ciniawsky/postcss-load-config
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');

module.exports = {
  'plugins': [
    tailwindcss('./tailwind.js'),
    // to edit target browsers: use 'browserlist' field in package.json
    autoprefixer(),
  ]
}
