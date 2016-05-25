/**
 * Created by xiaoxin on 2016-4-13.
 */
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    buffer = require('vinyl-buffer'),
    ngAnnotate = require('browserify-ngannotate');

gulp.task('clean', function (cb) {
    del([
        './public/build/js'
    ], cb);
});

gulp.task('build-js', ['clean','build-template-cache'], function() {
    var b = browserify({
        entries: './public/javascripts/myApp.js',
        debug: true,
         transform: [ngAnnotate]
    });

    return b.bundle()
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(uglify({ mangle: false }))
        .on('error', function(err) {
            gutil.log(err.message);
            this.end();
        })
        .pipe(gulp.dest('./public/build/js/'));
});


gulp.task('build-template-cache', [], function() {

    var ngHtml2Js = require("gulp-ng-html2js"),
        concat = require("gulp-concat");

    return gulp.src(["./app/**/*.html","./public/javascripts/directiveTemplate/*.html"])
        .pipe(ngHtml2Js({
            moduleName: "template"
        }))
        .pipe(concat("template.js"))
        .pipe(gulp.dest("./public/javascripts"));
});

