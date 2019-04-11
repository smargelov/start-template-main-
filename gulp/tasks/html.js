module.exports = function () { 
    sm.gulp.task('html', function () {
        return sm.gulp.src('src/*.html')
            .pipe(sm.gp.plumber({ errorHandler: sm.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe(sm.gp.fileInclude({
                prefix: '@!@',
                basepath: '@file'
            }))
            .pipe(sm.gp.revAppend())
            .pipe(sm.gp.htmlBeautify())
            .pipe(sm.gulp.dest('build'))
            .on('end', sm.browserSync.reload); 
    });
 }