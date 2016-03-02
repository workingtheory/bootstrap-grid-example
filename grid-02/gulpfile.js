var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  watch = require('gulp-watch');

var opts = {
    baseDir: __dirname,
    distDir: __dirname + '/dist'
};

gulp.task('sass', function() {
    return sass('scss/bootstrap.scss', { style: 'expanded'})
        .pipe(gulp.dest(opts.distDir + '/css'));
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest(opts.distDir));
});

gulp.task('build', ['sass', 'html']);

gulp.task('default', function() {
    gulp.watch([opts.baseDir + '/scss/*.scss', opts.baseDir + '/*.html'], ['build']);
});