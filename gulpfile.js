const { src, dest } = require('gulp') /** node_modules/gulp/index.js */ /** src = source - buscar un archivo. dest = Almacenar un archivo. */
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    /** 1) Identificar el archivo principal 
     * Entonces digamos que va a ir en serie, realiza una tarea y después se va al siguiente pipe() y una vez que finaliza podemos tener otro pipe().
    */
    src('src/scss/app.scss')
        .pipe(sass()) /** 2) Compilar SASS */
        .pipe(dest('build/css')) /** 3) Exportarlo o guardarlo en una ubicación */

    done();
}

exports.css = css; 