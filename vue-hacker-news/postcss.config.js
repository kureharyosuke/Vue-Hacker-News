const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const postcssPurgecss = require(`@fullhuman/postcss-purgecss`)

const purgecss = postcssPurgecss({
  content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelistPatterns: [
   /-(leave|enter|appear)(|-(to|from|active))$/,
   /^(?!(|.*?:)cursor-move).-move$/,
   /^router-link(|-exact)-active$/
 ]
})

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
   process.env.NODE_ENV !== 'development' ? purgecss : ''
  ]
}