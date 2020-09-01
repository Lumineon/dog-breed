//Definição dos Modulos a serem utilizados no projeto
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserify = require('gulp-browserify');
const babelify = require('babelify');

//Função para minificar as imagens
function minificaImagem() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
}

gulp.task('minificaImagem', minificaImagem)

//Função para complilar o SASS e adicionar os prefixos
function compilaSass() {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 50 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/assets/css'));
}

//Tarefa de Gulp para a função de SASS
gulp.task('sass', compilaSass);

//Função para Juntar os arquivos JavaScript
function gulpJS() {
    return gulp.src('./src/assets/js/common/*.js')
        .pipe(browserify({
            transform: ['babelify'],
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/assets/js/common/'));
}

//Tarefa de Gulp para função de Concat
gulp.task('mainjs', gulpJS);

//Função de Watch do Gulp
function watch() {
    gulp.watch('./src/assets/scss/**/*.scss', compilaSass);
    gulp.watch('./src/assets/js/**/*.js', gulpJS);
}

//Inicia a tarefa de Watch
gulp.task('watch', watch);

//Tarefa padrão do Gulp que inicia o Watch e browser-sync
gulp.task('default', gulp.parallel('watch', 'sass', 'mainjs'));