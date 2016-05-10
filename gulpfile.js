const gulp = require('gulp');
const webpack = require('webpack-stream');

var files = ['app/**/*.html', 'app/**/*.css']

gulp.task('webpack:dev', () => {
  gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
  gulp.src(files)
  .pipe(gulp.dest('./build'));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev']);

gulp.task('default', ['build:dev']);
