module.exports = function () {
    sm.gulp.task('scripts:lib', function () {
        return sm.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/slick-carousel/slick/slick.js'])
            .pipe(sm.gp.concat('libs.min.js'))
            .pipe(sm.gulp.dest('build/js/'))
            .pipe(sm.browserSync.reload({
                stream: true
            }));
    });

    sm.gulp.task('scripts', function () {
        return sm.gulp.src(['src/js/main.js'])
            .pipe(sm.gulp.dest('build/js/'))
            .pipe(sm.browserSync.reload({
                stream: true
            }));
    });
};