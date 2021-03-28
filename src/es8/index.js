// Nota: en esta version se incorpora que al finalizar un atributo en un objeto, este lo ejecuta sin importar si este tiene una coma o no.
// Agregar objetos a una matriz 

const data = {
    name1: 'Diego',
    name2: 'Jose',
    address: 'Chavez',
    address2: 'Chirinos'
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); // Permite contar cuantos objetos tiene el arreglo



//Agregar objetos a una matriz en formato string

const data = {
    name1: 'Diego',
    name2: 'Jose',
    address: 'Chavez',
    address2: 'Chirinos',
}

const values = Object.values(data);
console.log(values);        
console.log(values.length);        


// Uso de Pad permite agregar contenido en cadena ya sea al inicio o al final de una cadena principal

const string = 'hello';
console.log(string.padStart(8, 'hi-'));
console.log(string.padEnd(12,' ----'));


// USO DE async - await

const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

// Uso del try and catch con el async - await
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
}