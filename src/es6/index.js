// Establecer atributos en una funcion con ECMAScript 6

function newFunction(name = 'Diego', age= 24, country='VE'){
    console.log(name, age, country);
}
newFunction();


//Concatenar una frase string en ECMAScript 6

let hello = "hello";
let world = "world";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);


// Valores multilineas de frases en ECMAScript 6

let lorem = `Aprendiendo las mejoras de ECMAScript 6, 
la evolucion de JS`;
console.log(lorem);

// Acceder y extraer los datos de un objeto en ECMAScript 6

let person = {
    'name': 'Diego',
    'age': 24,
    'country': 'VE'
}

let { name, age, country } = person;
console.log( name, age, country );

// Operador de propagacion en ECMAScript 6

let team1 = ['Diego', 'Jose', 'Chavez', 'Chirinos'];
let team2 = ['Jose', 'Diego', 'Perez', 'Sanchez'];

let education = ['Maria', ...team1, ...team2 ];

console.log(education);


// Reemplazar var por let 
// permite ejecutarlo o acceder a la varible desde su mismo contexto (no lo realiza globalmente)

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

// Uso del const
// bloquea que no cambie el valor a futuro

const a = 'b';

// Propiedad de objetos mejorada

let name = 'diego';
let age = 24;

obj2 = { name, age};
console.log(obj2);

// Funciones de tipo flecha (funciones anonimas)

// Forma 1
const names = [
    {name: 'Diego', age: 24},
    {name: 'Maria', age:42}
]
let listOfNames = names.map(item => console.log(item.name));

// Forma 2
// const listOfNames3 = (names, age, conuntry ) =>{
//     ...;
// }

// Forma 3
// const listOfName4 = name =>{
//     ...;
// }

// Forma 4
// const square = num => num * num;


// Uso de Promesas sustituyo a los callback para el uso de la asincronia

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!');                // De acuerdo al resultado obtenido muestra los diferentes mensajes
        }
        else{
            reject('Ups!');
        }
    });
}

helloPromise()
.then(response => console.log(response))        // Muestra si se ejecuto correctamente
.then(response => console.log('Hola'))          // El then es relativo al numero de casos que se quiera mostrar en la ejecucion
.catch(error => console.log(error));            // Muestra el error en la ejecucion

// Uso de Clases

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


// import y export de modulos

import { hello } from './module';

hello();


// Generadores (Generators)

function* helloWorld(){
    if (true){
        yield 'Hello, ';                    // El uso de yield permite recordar el valor cuando este ha sido modificado
    }
    if (true){
        yield 'World';
    }
};

const generatorsHello = helloWorld();
console.log(generatorsHello.next().value);
console.log(generatorsHello.next().value);