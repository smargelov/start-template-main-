module.exports = function () {
    sm.gulp.task('img:build', function () {
        return sm.gulp.src('src/img/*.{png, jpeg, jpg, gif}')
            .pipe(sm.gp.tinypng('voh3HuYcKAIZ7ldxsrnxCWWYPYFfsELk'))
            .pipe(sm.gulp.dest('buid/img/'));
    });

    sm.gulp.task('img:dev', function () {
        return sm.gulp.src('src/img/*.{png, jpeg, jpg, gif}')
            .pipe(sm.gulp.dest('buid/img/'));
    });
};