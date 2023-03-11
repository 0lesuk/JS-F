console.log('Lugovyi');

let bottleCapacity;
let tableLength;

bottleCapacity = '2 L';
tableLength = '60 cm';
console.log(`Bottle capacity: ${bottleCapacity}, Table length: ${tableLength}`);

let dataTypes = {
    String: 'String',
    Number: 45,
    Boolean: false,
    Null: null,
    Undefined: undefined,
}

let isAdult = confirm('Are you over 18 years old?');

const firstName = 'Olexii';
const lastName = 'Luhovyi';
const group = 'JS Fundamentals';
const birthYear = 2002;
let isMarried = false;

console.log(typeof birthYear);
console.log(typeof isMarried);
console.log(typeof firstName);

let someNullVariable = null;
let someUndefinedVariable;

console.log(typeof someNullVariable);
console.log(typeof someUndefinedVariable);

let email = prompt('What is your email?');
let login = prompt('What is your login?');
let password = prompt('What is your password?');

alert(`Dear user your email is: ${email}, login: ${login}, password: ${password}`);
