module.exports = function () {
    sm.gulp.task('svg', () => {
        return sm.gulp.src('src/img/svg/*.svg')
            .pipe(sm.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe(sm.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {
                    xmlMode: true
                }
            }))
            .pipe(sm.gp.replace('&gt;', '>'))
            .pipe(sm.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe(sm.gulp.dest('build/img/svg'));
    });
};