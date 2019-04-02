const gulp = require('gulp');
// const browserSync = require('browser-sync');
// const reload = browserSync.reload;
const stylus = require('gulp-stylus')

let paths = {
  stylusAll: ["./css/styl/*.styl"]
};


gulp.task("stylus", function() 
{
  gulp.src(paths.stylusAll)
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
    // .pipe(reload({stream:true}));

    console.log('hey');
});

gulp.task('watch', function()
{
    gulp.watch(paths.stylusAll, gulp.series('stylus'));
});