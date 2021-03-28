// USO DEL OPERADOR DE REPOSO

const obj = {
    'name': 'Diego',
    'age': 24,
    'country': 'VE'
};

let { name, ...all} = obj;
console.log(name, all);


// OPERADOR DE PROPAGACION ENTRE OBJETOS (unifica los objetos en un objeto final)

const obj = {
    'name': 'Diego',
    'age': 24
};

const obj1 = {
    ...obj,
    'country': 'VE'
};

console.log(obj1);

// finally (permite ejecutar algo una vez que halla finalizado toda la ejecucion de la promesa) 

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalized'))

// REGEX en un grupo

const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexDate.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);