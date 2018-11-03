const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const browserify = require('gulp-browserify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
var runSequence = require('run-sequence');
// const zip = require('gulp-zip');//todo product need it to package

const stylesInput = ['./theme/*.scss', './theme/styles/*.scss'];
const scriptsInput = ['./scripts/*.js', './scripts/*/*.js'];
const stylesOutput = './dist/theme/styles';
const scriptsOutput = 'dist/scripts';


gulp.task('clean:dist', () => {
    return gulp.src('./dist')
        .pipe(clean());

});

gulp.task('copy:assets', () => {
    return gulp.src(['theme/assets/*/*'])
        .pipe(gulp.dest('dist/theme/assets'));
});

gulp.task('build:styles', () => {
    return gulp.src('theme/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        // .pipe(cssnano())
        .pipe(rename(path => { path.basename += '.min'; }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(stylesOutput));
});

gulp.task('build:scripts', () => {
    return gulp.src(scriptsInput)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(browserify())
        .pipe(concat('main.js'))
        .pipe(rename(path => {
            path.basename += '.min';
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(scriptsOutput));

});

gulp.task('watch', () => {
    gulp.watch(scriptsInput, ['build:scripts']);
    gulp.watch(stylesInput, ['build:styles']);
})

gulp.task('default', () => {
    console.log(dirname)
    runSequence('clean:dist', ['copy:assets', 'build:styles', 'build:scripts'])
});