module.exports = function () {
    sm.gulp.task('scripts:lib', function () {
        return sm.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/slick-carousel/slick/slick.js'])
            .pipe(sm.gp.concat('libs.min.js'))
            .pipe(sm.gulp.dest('build/static/js/'))
            .pipe(sm.browserSync.reload({ //обновление страницы только после обработки всх файлов без перезагрузки
                stream: true
            }));
    });

    sm.gulp.task('scripts', function () {
        return sm.gulp.src(['src/static/js/main.js'])
            .pipe(sm.gulp.dest('build/static/js/'))
            .pipe(sm.browserSync.reload({ //обновление страницы только после обработки всх файлов без перезагрузки
                stream: true
            }));
    });
};