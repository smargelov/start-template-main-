module.exports = function () {
    sm.gulp.task('sass:dev', function () {
        return sm.gulp.src('src/static/sass/*.sass')
            .pipe(sm.gp.sass()) //запускаем sass
            .pipe(sm.gp.sourcemaps.init()) //инициализация sourcemap
            .pipe(sm.gp.autoprefixer({ // запускаем авоперфиксер
                browsers: ['last 10 versions'] //последние 10 версии браузеров
            }))
            .on("error", sm.gp.notify.onError({ // отображение ошибок
                title: "Ошибка в стилях"
              }))
            
            .pipe(sm.gp.sourcemaps.write()) // запись sourcemap
            .pipe(sm.gulp.dest('build/static/css'))
            .pipe(sm.browserSync.reload({ //обновление страницы только после обработки всх файлов без перезагрузки
                stream: true
            }));
    });
    
    

    sm.gulp.task('sass:build', function () {
           return sm.gulp.src('src/static/sass/main.sass')
            .pipe(sm.gp.sass()) //запускаем sass
            .pipe(sm.gp.autoprefixer({ // запускаем авоперфиксер
                browsers: ['last 10 versions'] //последние 10 версии браузеров
            }))
            .on("error", sm.gp.notify.onError({ // отображение ошибок
                title: "Ошибка в стилях"
            }))
            .pipe(sm.gp.csso({    //запускаем csso (объединяет элементы в итоговом css)
                restructure: false,
                sourceMap: false
            })) //запускаем csso (объединяет элементы в итоговом css)
            .pipe(sm.mmq()) 
            .pipe(sm.gp.csscomb())
            .pipe(sm.gulp.dest('build/static/css'));
    });

    sm.gulp.task('sass:lib', function() {
        return sm.gulp.src('src/static/sass/libs.sass')
            .pipe(sm.gp.sass()) //запускаем sass
            .pipe(sm.gp.csso())
            .pipe(sm.gulp.dest('build/static/css'));
    });
};

