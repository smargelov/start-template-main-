module.exports = function () {
    sm.gulp.task('serve', function() { 
        sm.browserSync.init({ //запускаем отслеживание
            server: {
                baseDir: "./build" //папка для отслеживания
            }
        });
    });
};