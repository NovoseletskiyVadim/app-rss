
var gulp = require('gulp'),
sass= require('gulp-sass'), 
browserSync= require('browser-sync'); 


gulp.task('sass', function(){ 
    return gulp.src('app/sass/main.scss') 
    .pipe(sass()) 
    .pipe(gulp.dest('app/css')) 
    .pipe(browserSync.reload({stream: true})) 
});

gulp.task('html',function(){
    return gulp.src('app/**/*.html')
    .pipe(browserSync.reload({stream:true}))

});

gulp.task('js',function(){
    return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({stream:true}))

});


gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false
    });
});

gulp.task('watch',  function() {
    
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass')); 
    gulp.watch('app/**/*.html',gulp.parallel('html'));
    gulp.watch('app/js/**/*.js', gulp.parallel('js')); 

});

gulp.task('default', gulp.parallel('watch','browser-sync','sass','html','js'));