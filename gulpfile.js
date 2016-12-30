var gulp = require('gulp'),
livereload = require('gulp-livereload'),
webserver = require('gulp-webserver'),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
minifyCss = require('gulp-minify-css');
//自动刷新
gulp.task('webserver', () =>{
	gulp.src('./').pipe(webserver({
		livereload:true,
		open:true
	}));
});
//js文件压缩
gulp.task('script',function(){
	return gulp.src('src/**/*.js')//源文件路径
	.pipe(uglify({preserveComments:'some'}))//使用uglify进行压缩
	.pipe(gulp.dest('dist/js'));//输出路径
});
//css文件压缩
gulp.task('mincss',function(){
	return gulp.src('src/css/*.css')
	.pipe(gulp.dest('dist/css'))
})
//图片压缩
gulp.task('images',function(){
	return gulp.src('src/images/*.{png,jpg,gif}')
	.pipe(imagemin({
		progressive:true,
	}))
	.pipe(gulp.dest('dist/images'));
});
//监听
gulp.task('watch',function(){
	gulp.watch('*.html')
});
//默认的任务
gulp.task('default',['webserver','watch','script','images']);
