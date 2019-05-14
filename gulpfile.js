//Adiciona os móduos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

//Função para compilar e comprimir o Sass
function compilaSass() {
  return gulp.src('scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
}

//Tarefa do Sass
gulp.task('sass', compilaSass);

//Tarefa para iniciar o Browser-Sync
gulp.task('browser-sync', browser);

//FUnção de watch do gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch('*.html').on('change', browserSync.reload);
}

//Inicia a tarefa de watch
gulp.task('watch', watch);

//Tarefa padrão do Gulp
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass'));