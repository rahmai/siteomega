var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// task para o sass
gulp.task('sass',function(){

	return sass('sass/*.sass')

});


// task default gulp
gulp.task('default', function(){

});