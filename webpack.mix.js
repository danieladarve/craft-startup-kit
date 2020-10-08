let mix = require('laravel-mix');
require('laravel-mix-eslint-config');
require('laravel-mix-postcss-config');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .setPublicPath('./web')
  .js('src/app.js', './web/assets/app.js').eslint({
    enforce: 'pre',
    test: ['js'],
    exclude: ['node_modules', 'vendor'],
    loader: 'eslint-loader',
    options: {
      fix: true,
      cache: false
    }
  })
  .postCss('src/app.css', './web/assets/app.css')
  .postCssConfig({
    parser: 'postcss-scss',
    plugins: [
      require('postcss-easy-import'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer')
    ]
  })
  .webpackConfig({
    resolve: {
      alias: {
        '@' : __dirname,
      },
    }
  })
  .version();
