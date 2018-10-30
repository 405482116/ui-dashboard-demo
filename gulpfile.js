const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('clean:dist', function (cb) {
    return del(['dist'], cb)
});

gulp.task('copy:fonts', ['clean:dist'], function () {
    return gulp.src(['theme/font_icons/fonts/*'])
        .pipe(gulp.dest('dist/theme/style/fonts'))
});

gulp.task('copy:logo', ['clean:dist'], function () {
    return gulp.src(['theme/logo/*'])
        .pipe(gulp.dest('dist/theme/logo'))
});

gulp.task('build:styles', ['clean:dist', 'copy:logo', 'copy:fonts'], function () {
    return gulp.src('theme/index.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/theme/style'))
});

