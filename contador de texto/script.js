/* Declaring variables. */
let stats = document.querySelector('.status');
let text = document.getElementById('text');
let char = document.getElementById('char');
let words = document.getElementById('words');
let lines = document.getElementById('lines');
let symbols = document.getElementById('symbols');


function count() {
    /* Checking if the textarea is empty. If it is, it hides the stats. */
    if (text.value.length === 0) {
        stats.style.display = "none";
    }
 
    else {
       /* Making the stats visible. */
        stats.style.display = "block";
        char.innerHTML = text.value.length + " Caracteres" //char
        /* Counting the words. */
        words.innerHTML = text.value.trim().split(/\s+/).length + " Palabras"; //words
        lines.innerHTML = text.value.split("\n").length + " Líneas"; //lines
        symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Símbolos"
    }
}
text.addEventListener("input", count);