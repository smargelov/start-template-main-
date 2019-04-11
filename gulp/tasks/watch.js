module.exports = function () {
    sm.gulp.task('watch', function() {
        sm.gulp.watch('src/**/*.html', 
        sm.gulp.series('html')); // следим за файлами HTML
        sm.gulp.watch('src/sass/**/*.sass', sm.gulp.series('sass:dev')); // следим за файлами sass
        sm.gulp.watch('src/js/main.js', sm.gulp.series('scripts')); // следим за файлами js
        sm.gulp.watch('src/img/**/*', sm.gulp.series('img:dev')); // следим за картинками 
        sm.gulp.watch('src/img/svg/*', sm.gulp.series('svg')); // следим за картинками 
    });
};