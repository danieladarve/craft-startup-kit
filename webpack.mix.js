let mix = require('laravel-mix');
require('laravel-mix-postcss-config');
require('laravel-mix-eslint-config');

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
      // Plugins for PostCSS
      require('postcss-import'),
      require('postcss-nested'),
      require('tailwindcss'),
    ],
  })
  .webpackConfig({
    resolve: {
      alias: {
        '@' : __dirname,
      },
    }
  })
  .version();
