import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{ //创建gulp脚本任务
    return gulp.src(['app/js/index.js']) //打开app/js/index.js
        .pipe(plumber({ //处理错误，修改默认处理机制
            errorHandler:function(){

            }
        }))
        .pipe(named()) //重命名
        .pipe(gulpWebpack({ //进入webpack功能
            module:{
                loaders:[{
                    tests:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{ //错误的时候的处理
            log(`Finished '${colors.cyan('scripts')}'`,states.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/plublic/js')) //编译后的文件放置路径
        .pipe(rename({ //重新命名编译后项目名字
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))//压缩
        .pipe(gulp.dest('server/public/js'))//存储
        .pipe(gulpif(args.watch,livereload())) //监听，当文件改动的时候自动刷新
})