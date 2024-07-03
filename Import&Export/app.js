//Se importa la clase Persona desde persona.js
const Persona = require('./persona');

//Se crean las instancias de Persona
const persona1 = new Persona();
    persona1.setNombre('Juan');
        persona1.setEdad(30);

const persona2 = new Persona();
    persona2.setNombre('Ana');
        persona2.setEdad(25);

//Se usa el método mostrarInformacion y mostrar los resultados en la consola
console.log(persona1.mostrarInformacion()); // Debe mostrar: Nombre: Juan, Edad: 30
    console.log(persona2.mostrarInformacion()); // Debe mostrar: Nombre: Ana, Edad: 25