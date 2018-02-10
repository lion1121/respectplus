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

mix.js('resources/assets/js/main.js', 'public/js').sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
    'resources/assets/libs/bootstrap/css/bootstrap.css',
    'resources/assets/libs/font-awesome-4.7.0/css/font-awesome.css',
    'resources/assets/libs/slick-1.8.0/slick/slick.css',
    'resources/assets/libs/Gallery-master/css/blueimp-gallery.css',
    'resources/assets/libs/slick-1.8.0/slick/slick-theme.css',
    'resources/assets/libs/cropperjs-master/cropper.css'


], 'public/css/libs.css');

mix.scripts([

    'resources/assets/libs/jquery/jquery-3.2.1.js',
    'resources/assets/libs/bootstrap/js/bootstrap.js',
    'resources/assets/libs/slick-1.8.0/slick/slick.js',
    'resources/assets/libs/Gallery-master/js/blueimp-gallery.js'
    // 'resources/assets/libs/cropperjs-master/cropper.js'

], 'public/js/libs.js');

mix.scripts([

    'resources/assets/libs/cropperjs-master/cropper.js'

], 'public/js/cropper.js');
