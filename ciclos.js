/* 
Ciclos  - Bucles - Loops

while
do while
for

*/

// while
/*
let condicion = 1; - valor iniial

while(condicion){ mientras sea verdadera
se añade a tu código
modificación a nuestro valor inicia
}
*/

//imprimir todos los numeros del 1 - 10

/*while(condicion <= 10){
    console.log(numero);
    //condicion = condicion + 1;
    condicion++;
    // ++ significa sumar 1
}*/


/*let numero = 1;
console.log(numero);
numero++;//2 numero = numero + 1
console.log(numero);
numero++;//3
console.log(numero);
numero++;//4
console.log(numero);
numero--;//3 numero = numero - 1
console.log(numero);
numero--;//2
console.log(numero);
numero--;//1
console.log(numero);
*/
let condicion = 1;

/* while(condicion <= 10){
    console.log(" hola ");
    //condicion = condicion + 1;
    condicion++;
    // ++ significa sumar 1
}

/*
do while
*/
let numero = 11;

/*do{
    console.log(numero);
    numero++;
} while (numero <= 10);

/*
for utiliza un contador de manera automática pero se le
indica en donde empieza y donde termina
*/

/*for (let control = 1; control <= 10; control++){
    console.log(control);

}*/

const comidas = [" pozole", " tacos ", " tamales ", " tortas "];

for(let i = 0; i < comidas.length; i++){
    console.log(comidas[i]);
}