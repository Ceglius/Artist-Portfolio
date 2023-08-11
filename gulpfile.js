const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const named = require("vinyl-named");
const concat = require('gulp-concat');
const vinylFtp = require('vinyl-ftp');



// js unminified

function js() {
  return gulp
  .src(["src/js/files/scripts.js","!src/js/files/animations.js", "src/js/files/sliders.js"])
    .pipe(named())
    .pipe(concat('main.js'))
    .pipe(gulp.dest("dist/js"));
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

