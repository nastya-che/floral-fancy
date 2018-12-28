let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
   browserSync.init({
       server: {
           baseDir: "./app"
       },
       port: 8080,
       open: true,
       notify: false
   });
});

gulp.task('sass', function () {
   return gulp.src('./app/scss/styles.scss')
       .pipe(sass())
       .pipe(gulp.dest('./app/css'))
       .pipe(browserSync.stream())
});


gulp.task('watch', ['browser-sync', 'sass'], function(){
    gulp.watch('./app/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['browser-sync', 'sass', 'watch']);