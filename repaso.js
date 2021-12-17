/*
Arreglos
*/

const comidas = [" Pozoles ", " Quesadillas ", " Tacos ", ];

/*
Lenght
*/
console.log(comidas.length);

/*
push - agrega al final
pop  - quita un elemento del final
unshift - agrega al inicio
shift  - quita un elemento del inicio
*/

comidas.push(" torta ");
console.log(comidas);

comidas.unshift(" pancita ");
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/*forEach - nos puede servir para realizar unq acción
por cada elemento de nuestro arreglo (tambien conocidas como
    funciones anonimas)
*/

/*console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);*/

comidas.forEach(function(el) {
console.log(el);
})

const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function (el){
    let suma = el + 1;
    console.log(suma);
})
console.log(numeros);

/* ejercicio */
const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);


console.log(arr);