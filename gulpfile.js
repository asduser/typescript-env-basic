var gulp = require('gulp');
var ts = require('gulp-typescript');
var insert = require('gulp-insert');
var replace = require('gulp-replace-task');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var taskTime = require('gulp-total-task-time');

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript'),
	outFile: 'output.js'
});


// Compile src files
gulp.task('compile', function () {
	return gulp.src('src/**/*.ts')
		.pipe(ts(tsProject))
		.pipe(insert.append("\nrequirejs(['index']);"))
		.pipe(gulp.dest('output'));
});

// Write timestamps
gulp.task('replace', function(){
	gulp.src('index.html')
		.pipe(replace({
			patterns: [
				{
					match: 'hash',
					replacement: new Date().getTime()
				}
			]
		}))
		.pipe(gulp.dest('output'));
});

// Minify the main bundle
gulp.task('minify', ['compile'], function () {
	return gulp.src('output/output.js')
		.pipe(uglify({
			compress: {
				drop_console: true
			}
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('output'));
});

// Show total time
taskTime.init();


// Use in CLI
//
gulp.task('default', ['minify', 'replace'], function() {
	console.log('The main task has been completed!');
});

gulp.task('watch', ['compile'], function() {
	gulp.watch('scripts/**/*.ts', ['compile']);
	console.log('Watch mode is activated now!');
});