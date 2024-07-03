/*Ejercicio 2: Exportar e Importar Clases
    Crea dos archivos, persona.js y app.js. En persona.js, define y exporta una clase Persona con propiedades nombre y edad, y un método  mostrarInformacion. Luego, importa esta clase en app.js y crea instancias de Persona y ejecuta el método de la clase.*/ 
    //El contstructor contiene nombre y edad.
class Persona {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        }
    //Un constructor para definir el nombre que se pondra
setNombre(nombre) {
    this.nombre = nombre;
        }
    //Otro constructor para darle edad a la persona.
setEdad(edad) {
    this.edad = edad;
        }
    //Este mostrara la informacion dada
    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
        }
}

    //Por ultimo se exporta la clase
    module.exports = Persona;