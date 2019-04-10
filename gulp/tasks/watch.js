module.exports = function () {
    sm.gulp.task('watch', function() {
        sm.gulp.watch('src/pug/**/*.pug', sm.gulp.series('pug')); // следим за файлами PUG
        sm.gulp.watch('src/static/sass/**/*.sass', sm.gulp.series('sass:dev')); // следим за файлами sass
        sm.gulp.watch('src/static/js/main.js', sm.gulp.series('scripts')); // следим за файлами js
        sm.gulp.watch('src/static/img/**/*', sm.gulp.series('img:dev')); // следим за картинками 
        sm.gulp.watch('src/static/img/svg/*', sm.gulp.series('svg')); // следим за картинками 
    });
};