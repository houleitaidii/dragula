var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat');


gulp.task('minify', function(){
	gulp.src('app/build/jira/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('app/dist/jira/'));
});

gulp.task('jshint', function(){
	gulp.src('app/build/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('concatjira', function(){
	gulp.src('app/dist/jira/*.js')
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('app/dist/jira/'));
});