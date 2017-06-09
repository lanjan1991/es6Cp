/**
 * 浏览器监听脚本
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.css',['css']);
})