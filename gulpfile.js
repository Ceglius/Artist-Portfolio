const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const TerserPlugin = require("terser-webpack-plugin");
const named = require("vinyl-named");
const webPackConfig = require("./config/webpack.uncompressed.script.config");
let webPackConfigBeautify = Object.assign({}, webPackConfig);
const vinylFtp = require('vinyl-ftp');
webPackConfigBeautify.optimization = {
  minimizer: [
    new TerserPlugin({
      extractComments: false,
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {
          defaults: false,
          unused: true,
        },
        mangle: false,
        module: false,
        toplevel: true,
        keep_classnames: true,
        keep_fnames: true,
        format: {
          beautify: true,
        },
      },
    }),
  ],
};
function js() {
  return gulp
    .src("src/js/app.js")
    .pipe(named())
    .pipe(
      webpack({
        config: webPackConfigBeautify,
      })
    )
    .pipe(gulp.dest("dist/"));
}

// sass
function buildStyles() {
  return gulp
    .src("./src/scss/style.scss")
    .pipe(rename("main.css"))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}


function ftpUpload() {
  const conn = vinylFtp.create({
    host: 'ftp.websitelive.net',
    user: '7780_Manotestas',
    password: 'f/kl4xe8vd+njaiWzhwutbsryYqp',
    parallel: 10, // The number of parallel uploads (optional, set as needed)
    log: console.log, // Use console.log for logging (optional)
  });

  const globs = [ 'dist/**/*','!**/main.js','!**/main.css']; // Replace 'dist/**/*' with the files you want to upload

  // Define the base directory on the FTP server where the files will be uploaded
  const remoteDir = '/';

  return gulp
    .src(globs, { base: 'dist', buffer: false })
    .pipe(conn.newer(remoteDir)) // Only upload newer files
    .pipe(conn.dest(remoteDir));
}

exports.default = gulp.series(buildStyles,js);
exports.deploy = gulp.series(ftpUpload);

