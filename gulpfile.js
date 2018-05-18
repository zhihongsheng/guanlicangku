const gulp = require("gulp"),
    minifyCss = require("gulp-clean-css"),
    bable = require("gulp-babel"),
    uglify = require("gulp-uglify");

    gulp.task("css",function(){
        gulp.src("./css/**/*.css")
            .pipe(minifyCss())
            .pipe(gulp.dest("./dist/"));
    });

    gulp.task("js",function(){
        gulp.src("./src/js/**/*.js")
        .pipe(bable({
            presets:['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"))
    });
