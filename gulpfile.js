const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', () => {
    return gulp.src('./sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', gulp.series(['sass'])); //watches any changes

});


//run gulp watch on command line
