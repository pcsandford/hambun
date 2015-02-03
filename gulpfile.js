var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer');


// scripts task
// uglifies
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});


// styles task
// uglifies
gulp.task('styles', function(){
	gulp.src('scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass({
			style:'expanded', "sourcemap=none": true
		}))
		.pipe(prefix('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4.1'))
		.pipe(gulp.dest('build/css'))
		.pipe(livereload());
});

// image task
// compress
gulp.task('image', function(){
	gulp.src('images/*')
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'));
});


// watch task
// watches js
gulp.task('watch', function(){

	var server = livereload();

	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);