module.exports = function () {
    sm.gulp.task('watch', function () {
        sm.gulp.watch('src/**/*.html',
            sm.gulp.series('html'));
        sm.gulp.watch('src/sass/**/*.sass', sm.gulp.series('sass:dev'));
        sm.gulp.watch('src/js/main.js', sm.gulp.series('scripts'));
        sm.gulp.watch('src/img/**/*', sm.gulp.series('img:dev'));
        sm.gulp.watch('src/img/svg/*', sm.gulp.series('svg'));
    });
};