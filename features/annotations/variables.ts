//Primitives
let apples = 5; // if we initialize and declaration on same, line, TS will use type inference for us.

apples = 15;
apples = 'string';

let speed: string = 'fast';
speed = 150;

let hasName: boolean = true;

let nothing: null = null;

let nada: undefined = undefined;
nada = 12;

// Built in objects
let now: Date = new Date();

// Arrays:
let colors: string[] = ['red', 'green', 'blue'];

let numbers: number[] = [12, 30, 40];
numbers = [12, 'alex']; // throws error

let truths: boolean[] = [true, false];

// Classes:
// class Car {}
// let car: Car = new Car();

// Object Literal:
let point: { x: number; y: number } = {
  x: 10,
  y: 'dave',
};

// Functions:
// what we care about is what type of args are inputs, and what is the output

// args        // output values
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use ANNOTATIONS
// 1. When we have a function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // infers 'any' type
console.log(coordinates.abc); // doesnt throw an error. {x: 10, y: 20}

// When we have a value w any type, TS cannot do any code checking

const coordinates2: { x: number; y: number } = JSON.parse(json);
console.log(coordinates2); // {x: 10, y: 20}
console.log(coordinates2.abc); // TS recognizes this as an error

//  2. When we delcare a vaiable on one line and initialize it later;

let words = ['red', 'green', 'blue'];
let foundword: boolean; // will default to any and not infer the type

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundword = true;
  }
}

// 3. Variables whose type cannot be inferred correctly

let numbers2 = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    numbersAboveZero = numbers2[i];
  }
}

// Type annotations for functions
