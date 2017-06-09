/**
 * 把所有脚本串联起来
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));