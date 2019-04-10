module.exports = function () {
    sm.gulp.task('pug', function () { // обычная структура gulp.tusk
        return sm.gulp.src('src/pug/pages/*.pug') //путь, откуда берём файлы
            .pipe(sm.gp.pug({ //запускаем pug
                pretty:true // опции pug (не в одну строку)
            }))
            .pipe(sm.gulp.dest('build')) // куда сохраняем результат
            .on('end', sm.browserSync.reload); //обновление страницы только после обработки всх файлов с перезагрузкой
    })
};