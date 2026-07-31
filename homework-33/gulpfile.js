const { src, task, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

const autoprefixer = require('autoprefixer');

const PLUGINS = [
    autoprefixer(),
    cssnano()
];

const PATH = {
    scssAllFiles: './scss/*.scss',
    htmlAllFiles: './*.html',
    jsAllFiles: './js/*.js'
}

function scss() {
    return src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(PLUGINS))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./css'))
        .pipe(browserSync.stream())
        .pipe(postcss([
            autoprefixer()
        ]));

}

function minifyCss() {
    return src('./css/styles.css')
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./css'))
        .pipe(browserSync.stream());
}

function watchFiles() {
    syncInit();
    watch(PATH.scssAllFiles, scss);
    watch(PATH.htmlAllFiles)
        .on('change', browserSync.reload);
    watch(PATH.jsAllFiles)
        .on('change', browserSync.reload);
}

function syncInit() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}

task('default', series(scss, minifyCss));
task('watch', watchFiles);