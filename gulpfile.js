var gulp = require("gulp");
var livereload = require("gulp-livereload");
var sass = require("gulp-ruby-sass");
var autoprefix = require("gulp-autoprefixer");

gulp.task("sass", function() {
	sass("assets/scss/**/*.scss")
		.pipe(autoprefix("last 2 versions"))
		.pipe(gulp.dest("./public/css/"))
		.pipe(livereload());
});

gulp.task("default", ["sass"], function() {
	gulp.watch("assets/scss/**/*.scss", ["sass"]);
});
