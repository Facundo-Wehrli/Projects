// declaro las variables
let stats = document.querySelector('.status');
let text = document.getElementById('text');
let char = document.getElementById('char');
let words = document.getElementById('words');
let lines = document.getElementById('lines');
let symbols = document.getElementById('symbols');


function count() {
    //verificando si el textarea está vacío, si lo está oculta el status
    if (text.value.length === 0) {
        stats.style.display = "none";
    }
 
    else {
       /* muestro los stats */
        stats.style.display = "block";
        // contanto los caracteres
        char.innerHTML = text.value.length + " Caracteres" 
        /* Contando las palabras */
            //.split es un método que divide un string en un array de substrings, y retorna un nuevo array,
            //.trim elimina los espacios en blanco que haya al principio o al final que haya en un string
            /*(\s)es una expresión regular que coincida con una o más
        caracteres de espacio en blanco. */
        words.innerHTML = text.value.trim().split
        (/\s+/).length + " Palabras"; 
        // contando las líneas
        lines.innerHTML = text.value.split("\n").length + " Líneas"; 
        // contando los símbolos
        symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Símbolos"
    }
}
//cuando ocurra el evento input llamo a la función count
text.addEventListener("input", count);
