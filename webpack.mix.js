let mix = require('laravel-mix');

mix.js('src/index.js', 'dist/vue-cookies-consent.js')
    .webpackConfig({
        output: {
            libraryTarget: 'umd'
        },
        externals: [
            'axios',
        ],
    });