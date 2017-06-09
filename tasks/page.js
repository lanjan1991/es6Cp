/**
 * 处理模板的脚本
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')  //需要处理的文件
        .pipe(gulp.dest('server'))  //输出目录
        .pipe(gulpif(args.watch,livereload()))  //监听
})