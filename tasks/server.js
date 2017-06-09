/**
 * 服务器脚本
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();

    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){ //服务热更新
        server.notify.apply(server,[file]);
    })

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){  //服务重启
        server.start.bind(server)();
    });
})