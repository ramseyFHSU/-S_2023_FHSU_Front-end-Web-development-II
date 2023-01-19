// Declaring variables in JavaScript
let name = "John Doe"; // Declare a variable using "let" keyword and assign a string value
const age = 30; // Declare a constant variable using "const" keyword and assign a number value
var address; // Declare a variable using "var" keyword (no value assigned)

// Reassigning variables
name = "Jane Smith"; // Reassign the "name" variable with a new string value
age = 35; // This will throw an error because "age" is a constant variable
address = "123 Main St"; // Assign a string value to the "address" variable

// Variable Types
let number = 10; // Number
let decimal = 10.5; // Number
let booleanValue = true; // Boolean
let text = "Hello World"; // String
let array = [1, 2, 3, 4]; // Array
let object = { name: "John", age: 30 }; // Object

// Variable scope
let globalVariable = "I am a global variable"; // Global scope

function myFunction() {
  let localVariable = "I am a local variable"; // Local scope
  console.log(globalVariable); // "I am a global variable"
}

myFunction();
console.log(localVariable); // This will throw an error because "localVariable" is not defined in the global scope

// Number data type
let int = 10;
let float = 10.5;

// String data type
let name2 = "John Doe";

// Boolean data type
let isValid = true;

// Array data type
let numbers = [1, 2, 3, 4];

// Object data type
let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

// Symbol data type
let symbol1 = Symbol("uniqueValue");
let symbol2 = Symbol("uniqueValue");
console.log(symbol1 === symbol2); // false

// BigInt data type
let bigInt = BigInt(9007199254740992);

// undefined data type
let undefinedValue;
console.log(undefinedValue); // undefined

// null data type
let nullValue = null;
console.log(nullValue); // null

// Function data type
function add(a, b) {
  return a + b;
}
let result1 = add(10, 20);
console.log(result1); // 30

//////////////// Function Declaration
function add(a, b) {
  return a + b;
}
let result = add(10, 20);
console.log(result); // 30

// Function Expression
let multiply = function (a, b) {
  return a * b;
};
let product = multiply(5, 10);
console.log(product); // 50

// Arrow Function
let divide = (a, b) => {
  return a / b;
};
let quotient = divide(100, 25);
console.log(quotient); // 4

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This is an IIFE");
})(); // Output: "This is an IIFE"

// Higher-Order Functions
function greet(name) {
  return function (greeting) {
    console.log(greeting + " " + name);
  };
}
let sayHello = greet("John");
sayHello("Hello"); // Output: "Hello John"

let multiplyF = function (a, b) {
  return a * b;
};

let multiplyA = (a, b) => {
  return a * b;
};

let square = (x) => {
  return x * x;
};
let squareA = (x) => x * x;

////////////////////////// Array Methods
let numbersA = [1, 2, 3, 4, 5];

// push()
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// pop()
let last = numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(last); // Output: 6

// slice()
let subArray = numbers.slice(1, 3);
console.log(subArray); // Output: [2, 3]

// splice()
numbers.splice(1, 2, 8, 9);
console.log(numbers); // Output: [1, 8, 9, 4, 5]

// concat()
let otherNumbers = [6, 7, 8];
let allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers); // Output: [1, 8, 9, 4, 5, 6, 7, 8]

// indexOf()
let index = numbers.indexOf(8);
console.log(index); // Output: 1

// forEach()
numbers.forEach((num, index) => {
  console.log(`Element at index ${index} is ${num}`);
});

// map()
let squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers); // Output: [1, 64, 81, 16, 25]

// Object Methods
let person1 = {
  name: "John",
  age: 30,
  job: "Developer",
};

// Object.assign()
let newPerson = Object.assign({}, person1);
console.log(newPerson); // Output: {name: "John", age: 30, job: "Developer"}

// Object.create()
let anotherPerson = Object.create(person);
console.log(anotherPerson); // Output: {__proto__: {name: "John", age: 30, job: "Developer"}}

// Object.defineProperty()
Object.defineProperty(anotherPerson, "address", {
  address: "125 park st",
  writable: true,
});
console.log(anotherPerson); // Output: {__proto__: {name: "John", age: 30, job: "Developer"}, address: "125 park st"}

// Object.defineProperties()
Object.defineProperties(anotherPerson, {
  address: { value: "New York", writable: true },
  phone: { value: "555-555-5555", writable: true },
});
console.log(anotherPerson);
// Output: {__proto__: {name: "John", age: 30, job: "Developer"}, address: "125 park st", address: "New York", phone: "555-555-5555"}

// Object.entries()
let entries = Object.entries(anotherPerson);
console.log(entries);
// Output: [["__proto__", {name: "John", age: 30, job: "Developer"}],["address", "125 park st"],["address", "New York"],["phone", "555-555-5555"]]
