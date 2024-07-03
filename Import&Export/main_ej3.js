 /*Ejercicio 3: Exportación e Importación por Defecto
    Crea dos archivos, calculadora.js y main.js. En calculadora.js, define y exporta por defecto una clase Calculadora con métodos multiplicar y dividir. Luego, importa esta clase en main.js y úsala.
    Usare este main para ejecutar ambos ejercicios al simultaneo*/
    //Se importa la clase calculadora
    import calculadora from './calculadora.js';
    //Se usan los métodos multiplicar y dividir y mostrar los resultados en la consola
    const calcu = new calculadora();
    //Se muestra la multiplicacion y division por consola
    console.log('Multiplicar 6 * 7:', calcu.multiplicar(6, 7)); //La mutiplicacion deberia dar 42
    console.log('Dividir 42 / 7:', calcu.dividir(42, 7)); //La dividsion deberia dar 6