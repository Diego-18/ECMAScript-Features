// Acceso a la profundidad del arreglo en la que se trabajara con el uso de flat

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat())

// flatmap permite realizar operaciones de acuerdo a un objeto contenido en un arreglo 
// en este ejemplo esta aplicando una multiplicacion por 2 a cada uno de los valores que se encuentran dentro del array

let array = [1,2,3,4,5,6];
console.log(array.flatMap(value => [value, value * 2]));

// El trimStart permite eliminar todos los espacios en blancos al incicio de alguna variable
// El trimEnd permite eliminar todos los espacios en blancos al final de alguna variable
let hello = '              hello world                   ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// En esta version es permitido el uso de catch sin pasarme el parametro del error ejemplo:
/*
try{

}
catch{

}
*/

// Se puede transformar un objeto a partir de un arreglo multiple

let entries = [["name", "diego"], ["age", 24]];
console.log(Object.fromEntries(entries));


// Se agrego el objeto tipo simbolo
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);