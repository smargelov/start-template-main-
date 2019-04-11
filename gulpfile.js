'use strict'

global.sm = {
    gulp: require('gulp'), //подключаем gulp
    gp: require('gulp-load-plugins')(), // подключаем плагин подключающий остальные плагины )))
    browserSync: require('browser-sync').create(), // подключаем плагин синхронизации браузера
    del: require('del'),
    mmq: require('gulp-merge-media-queries'),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

sm.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
})

sm.gulp.task('default',sm.gulp.series(
    sm.gulp.parallel('html', 'sass:dev', 'scripts', 'scripts:lib', 'img:dev'), // запускаем таски параллельно
    sm.gulp.parallel('watch', 'serve') // запускаем таски параллельно
));

sm.gulp.task('clean', function() {
    return sm.del('build/');
});

sm.gulp.task('build',sm.gulp.series(
    sm.gulp.parallel('clean'),
    sm.gulp.parallel('html', 'sass:build', 'sass:lib', 'scripts', 'scripts:lib', 'img:build'), // запускаем таски параллельно
    sm.gulp.parallel('watch', 'serve') // запускаем таски параллельно
));
