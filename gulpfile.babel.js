const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const postCss = require("gulp-postcss")
const babel = require("gulp-babel")
const terser = require("gulp-terser")
const purgecss = require("gulp-purgecss")
const htmlmin = require("gulp-htmlmin")

function styles() {
  const css = [autoprefixer(), cssnano()]

  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(postCss(css))

    .pipe(gulp.dest("dist/css"))
}

function cleanStyles() {
  return gulp
    .src("dist/css/style.css")
    .pipe(
      purgecss({
        content: ["dist/*.html"]
      })
    )
    .pipe(gulp.dest("dist/css"))
}

function traspilerJs() {
  return gulp
    .src("src/js/index.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(terser())
    .pipe(gulp.dest("dist/js"))
}

function minifyHtml() {
  return gulp
    .src("src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest("./dist"))
}

exports.build = gulp.series(styles, traspilerJs, cleanStyles, minifyHtml)
