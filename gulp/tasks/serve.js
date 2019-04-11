module.exports = function () {
    sm.gulp.task('serve', function () {
        sm.browserSync.init({
            server: {
                baseDir: "./build"
            }
        });
    });
};