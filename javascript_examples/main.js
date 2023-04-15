// declaring variables
const number = 56; // this value will change
let maximumNumber = 99;


// strings, integers, arrays, object
let sentence = 'The dog ate a cat';

// object = key/value pair
let pet = {
    'dog': 'Tom',
    'age': 4,
}
// console.log(pet);

// for loop
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
// let oneElement = hobbies[3];
// console.log(oneElement);

for (let index = 0; index < hobbies.length; index++) {
    const element = hobbies[index];
}
// for (let i = 0; i < hobbies.length; i++) {
//   console.log(`I enjoy ${hobbies[i]}.`);
// }

// // for of loop
// const fruits = ['oranges', 'apples', 'grapes'];
 
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // conditionals
// if (condition) {
    
// } else {
    
// }

// while (condition) {
    
// }

// // functions two ways
// const nameOfFunction = () => { }

// const withParameters = (param1, param2) => { }

// function nameOfFunction () { }

// function withParameters (param1, param2) { }

const randomFunction = () => {
    let newVariable = 'Words here';

    if ('Pig') {
        console.log('This is true');
    } else if ('Dog') {
        console.log('Dog');
    } else if ('Cat') {
        console.log('This is false');
    }

    let animal = 'Dog';

    switch (animal) {
        case 'Dog':
            console.log('Dog');
            break;
        case 'Pig':
            console.log('Pig');
            break;
        
        case 'Cat':
            console.log('Cat');
            break;
        default:
            break;
    }
}