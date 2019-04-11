module.exports = function () {
    sm.gulp.task('sass:dev', function () {
        return sm.gulp.src('src/sass/*.sass')
            .pipe(sm.gp.sass())
            .pipe(sm.gp.sourcemaps.init())
            .pipe(sm.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on("error", sm.gp.notify.onError({
                title: "Ошибка в стилях"
            }))

            .pipe(sm.gp.sourcemaps.write())
            .pipe(sm.gulp.dest('build/css'))
            .pipe(sm.browserSync.reload({
                stream: true
            }));
    });



    sm.gulp.task('sass:build', function () {
        return sm.gulp.src('src/sass/main.sass')
            .pipe(sm.gp.sass())
            .pipe(sm.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on("error", sm.gp.notify.onError({
                title: "Ошибка в стилях"
            }))
            .pipe(sm.gp.csso({
                restructure: false,
                sourceMap: false
            }))
            .pipe(sm.mmq())
            .pipe(sm.gp.csscomb())
            .pipe(sm.gulp.dest('build/css'));
    });

    sm.gulp.task('sass:lib', function () {
        return sm.gulp.src('src/sass/libs.sass')
            .pipe(sm.gp.sass())
            .pipe(sm.gp.csso())
            .pipe(sm.gulp.dest('build/css'));
    });
};