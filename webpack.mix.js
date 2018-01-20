let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/main.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
    'resources/assets/libs/bootstrap/css/bootstrap.css',
    'resources/assets/libs/font-awesome-4.7.0/font-awesome.css',
    'resources/assets/libs/PhotoSwipe/css/photoswipe.css',
    'resources/assets/libs/PhotoSwipe/css/default-skin/default-skin.css',
    'resources/assets/libs/slick-1.8.0/slick/slick.css',
    'resources/assets/libs/slick-1.8.0/slick/slick-theme.css'

], 'public/css/libs.css');

mix.scripts([
    'resources/assets/libs/jquery/jquery-3.2.1.js',
    'resources/assets/libs/bootstrap/js/bootstrap.js',
    'resources/assets/libs/PhotoSwipe/js/photoswipe.min.js',
    'resources/assets/libs/PhotoSwipe/js/photoswipe-ui-default.min.js',
    'resources/assets/libs/slick-1.8.0/slick/slick.js'

], 'public/js/libs.js');
