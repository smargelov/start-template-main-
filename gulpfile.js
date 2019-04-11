'use strict'

global.sm = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    mmq: require('gulp-merge-media-queries'),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

sm.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
})

sm.gulp.task('default', sm.gulp.series(
    sm.gulp.parallel('html', 'sass:dev', 'scripts', 'scripts:lib', 'img:dev'),
    sm.gulp.parallel('watch', 'serve')
));

sm.gulp.task('clean', function () {
    return sm.del('build/');
});

sm.gulp.task('build', sm.gulp.series(
    sm.gulp.parallel('clean'),
    sm.gulp.parallel('html', 'sass:build', 'sass:lib', 'scripts', 'scripts:lib', 'img:build'),
    sm.gulp.parallel('watch', 'serve')
));