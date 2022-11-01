// Objeto Estudiante:
function Estudiante(codigo, nombre, nota) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota = nota;
}

// Módulo que agrupa las funciones realacionadas con el sistema:
var GestorEstudiantes = {
    estudiantes: [],
    init: function () {
        document.getElementById('registroEstudiante').addEventListener('click', this.registrarEstudiante);
        document.getElementById('calculoPromedio').addEventListener('click', this.calcularNotaPromedio);
        document.getElementById('calculoNotaMayor').addEventListener('click', this.calcularNotaMayor);
        document.getElementById('calculoNotaMenor').addEventListener('click', this.calcularNotaMenor);
    },
    registrarEstudiante: function () {
        var codigo = document.getElementById('codigo');
        var nombre = document.getElementById('nombre');
        var nota = document.getElementById('nota');

        if (codigo.value && nombre.value && nota.value) {
            if(parseInt(codigo.value) > 0) {
                if(parseFloat(nota.value) >= 0 && parseFloat(nota.value) <= 5.0) {
                    if (!GestorEstudiantes.estudianteExiste(parseInt(codigo.value))) {
                        var nuevoEstudiante = new Estudiante(parseInt(codigo.value), nombre.value, parseFloat(nota.value));
                        GestorEstudiantes.estudiantes.push(nuevoEstudiante);

                        var notasTBody = document.getElementById('notas');
                        var nuevoTr = document.createElement('tr');

                        var idTd = document.createElement('td');
                        idTd.textContent = nuevoEstudiante.codigo;
                        nuevoTr.appendChild(idTd);

                        var nombreTd = document.createElement('td');
                        nombreTd.textContent = nuevoEstudiante.nombre;
                        nuevoTr.appendChild(nombreTd);

                        var notaTd = document.createElement('td');
                        notaTd.textContent = nuevoEstudiante.nota;
                        nuevoTr.appendChild(notaTd);

                        notasTBody.appendChild(nuevoTr);
                    } else {
                        alert('Un estudiante con el código ' + String(codigo.value) + ' ya existe.');
                    }
                } else {
                    alert('La nota debe estar entre 0.0 y 5.0');
                }
            } else {
                alert('El código debe ser positivo');
            }
        } else {
            alert('Todos los campos son obligatorios');
        }
    },
    calcularNotaPromedio: function () {
        var sumaNotas = 0.0;

        for (var i = 0; i < GestorEstudiantes.estudiantes.length; ++i) {
            sumaNotas += GestorEstudiantes.estudiantes[i].nota;
        }

        alert("La nota promedio es: " + (sumaNotas / GestorEstudiantes.estudiantes.length).toFixed(2));
    },
    calcularNotaMayor: function () {
        var indiceNotaMayor = 0;
        var notaMayor = GestorEstudiantes.estudiantes[indiceNotaMayor].nota;

        for (var i = 1; i < GestorEstudiantes.estudiantes.length; ++i) {
            if (GestorEstudiantes.estudiantes[i].nota > notaMayor) {
                notaMayor = GestorEstudiantes.estudiantes[i].nota;
                indiceNotaMayor = i;
            }
        }

        alert("El estudiante " + GestorEstudiantes.estudiantes[indiceNotaMayor].nombre + " tiene la nota mayor: " + notaMayor);
    },
    calcularNotaMenor: function () {
        var indiceNotaMenor = 0;
        var notaMenor = GestorEstudiantes.estudiantes[indiceNotaMenor].nota;

        for (var i = 1; i < GestorEstudiantes.estudiantes.length; ++i) {
            if (GestorEstudiantes.estudiantes[i].nota < notaMenor) {
                notaMenor = GestorEstudiantes.estudiantes[i].nota;
                indiceNotaMenor = i;
            }
        }

        alert("El estudiante " + GestorEstudiantes.estudiantes[indiceNotaMenor].nombre + " tiene la nota menor: " + notaMenor);
    },
    estudianteExiste: function(codigo){
        for(var i = 0; i < this.estudiantes.length; ++i){
            if(codigo === this.estudiantes[i].codigo){
                return true;
            }
        }

        return false;
    }
};

GestorEstudiantes.init();