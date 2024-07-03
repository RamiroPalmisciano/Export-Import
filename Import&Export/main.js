   /*Ejercicio 1: (Exportar e Importar Funciones)
    Crea dos archivos, math.js y main.js. En math.js, define y exporta funciones para sumar y restar. Luego, importa estas funciones en  main.js y muestralas por consola.*/
    //Se utiliza la funcion para sumar dos números
    //Se importan las funciones desde el archivo donde están definidas

    import { sumar, restar} from './math.js'; 

    //Se usan las funciones y se muestran los resultados en la consola
    console.log('Sumar 3 + 4:', sumar(3, 4)); //La suma debe dar 7
    console.log('Restar 10 - 6:', restar(10, 6)); //Esta resta debe dar 4

