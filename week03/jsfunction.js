function square(number) {
    return number * number;
  }

console.log(square(5));

//When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function
function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(myCar.make); // "Honda"
  myFunc(myCar);
  console.log(myCar.make); // "Toyota"


  //When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function
  function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30

//Function declarations and expressions can be nested, which forms a scope chain. 

//The following variables are defined in the global scope
var num1 = 20,
  num2 = 3,
  name = "Chamahk";
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(num1, num2)); // 409

function multiply() {
    return num1 * num2;
  }
  
  console.log(multiply()); // 60
  
  // A nested function example
  function getScore() {
    const num1 = 2;
    const num2 = 3;
  
    function add() {
      return `${name} scored ${num1 + num2}`;
    }
  
    return add();
  }

//a name can be provided with a function expression. Providing a name allows the function to refer to itself
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3)); // 6

//Function expressions are convenient when passing a function as an argument to another function. The following example 
// defines a map function that should receive a function as first argument and an array as second argument. 
// Then, it is called with a function defined by a function expression:
  function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cubedNumbers = map(function (x) {
    return x * x * x;
  }, numbers);
  console.log(cubedNumbers); // [0, 1, 8, 125, 1000]



  //In JavaScript, a function can be defined based on a condition. 
  // For example, the following function definition defines myFunc only if num equals 0:

  let myFunc1;
const num = 0;
    if (num === 0) {
    myFunc1 = function (theObject) {
    theObject.make = "Toyota";
  };
}


//A function can call itself. For example, here is a function that computes factorials recursively:


function factorial1(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial1(n - 1);
  }
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial1(6)); // 720


//The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function.
// The following function takes an object as an argument and assigns a new value to the make property of that object:
//You can pass any number of arguments to this function, and it concatenates each argument into a string "list":
function myConcat(separator) {
  let result = ""; // initialize list
  let i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "




//arrow functions are a more concise way to write function expressions. They utilize a new token, =>, that looks like a fat arrow.
// Arrow functions are anonymous and change the way this binds in functions.
// Arrow functions are always anonymous.
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Arrow functions should not be used as object methods.
// Arrow functions do not have arguments.
// Arrow functions cannot be used as constructors and will throw an error when used with new.
// Arrow functions have a concise syntax.
// Arrow functions have an implicit return value.
// Arrow functions are best suited for non-method functions.
// Arrow functions are not good for call back functions.
// Arrow functions are not good for event listeners/handlers.
// Arrow functions are not good for prototype methods.

//The following example shows a function that is written as a function expression and as an arrow function:
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]

  //The following example shows a function with no arguments and a single statement. 
  // The arrow function is shorter and easier to read than the function expression:
  const func = () => {
    console.log('Hello, World!');
  };
  
  func();

  //The following example shows a function with one argument. 
  // The arrow function is shorter and easier to read than the function expression:
  const func1 = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  func1('World');

  //The following example shows a function with multiple arguments. 
  // The arrow function is shorter and easier to read than the function expression:
  const func2 = (greeting, name) => {
    console.log(`${greeting}, ${name}!`);
  };
  
  func2('Hello', 'World');

  //The following example shows a function with a single argument and a single statement. 
  // The arrow function is shorter and easier to read than the function expression:
  const func3 = name => console.log(`Hello, ${name}!`);
  
  func3('World');

  //The following example shows a function with multiple arguments and a single statement. 
  // The arrow function is shorter and easier to read than the function expression:
  const func4 = (greeting, name) => console.log(`${greeting}, ${name}!`);
  
  func4('Hello', 'World');

  //The following example shows a function with a single argument and a single statement. 
  // The arrow function is shorter and easier to read than the function expression:
  const func5 = name => `Hello, ${name}!`;
  
  console.log(func5('World'));

  //The following example shows a function with multiple arguments and a single statement. 
  // The arrow function is shorter and easier to read than the function expression:
  const func6 = (greeting, name) => `${greeting}, ${name}!`;
  
  console.log(func6('Hello', 'World'));


  //The following example shows a function with a single argument
    // The arrow function is shorter and easier to read than the function expression:
    const func7 = name => `Hello, ${name}!`;
    

    //The following example shows a function with multiple arguments and a single statement.
    // The arrow function is shorter and easier to read than the function expression:
    const func8 = (greeting, name) => `${greeting}, ${name}!`;

    //The following example shows a function with no arguments and a single statement.
    // The arrow function is shorter and easier to read than the function expression:
    const func9 = () => {
      console.log('Hello, World!');
    };

    //The following example shows a function with one argument.
    // The arrow function is shorter and easier to read than the function expression:
    const func10 = (name) => {
      console.log(`Hello, ${name}!`);
    };

    //The following example shows a function with multiple arguments.
    // The arrow function is shorter and easier to read than the function expression:
    const func11 = (greeting, name) => {
      console.log(`${greeting}, ${name}!`);
    };

    //The following example shows a function with a single argument and a single statement.
    // The arrow function is shorter and easier to read than the function expression:
    const func12 = name => console.log(`Hello, ${name}!`);

    //The following example shows a function with multiple arguments and a single statement.
    // The arrow function is shorter and easier to read than the function expression:
    const func13 = (greeting, name) => console.log(`${greeting}, ${name}!`);

    //The following example shows a function with a single argument and a single statement.
    // The arrow function is shorter and easier to read than the function expression:
    const func14 = name => `Hello, ${name}!`;

    const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]


//function declaration 
// normal mode
function fullName(first, last) {
    return `${first} ${last}`;   // string concatenation first + ' ' + last (not preferred)
  }

    console.log(fullName('Tiffany', 'Hudgens')); // "Tiffany Hudgens"


//anonymous function expression
    const fullName1 = function (first, last) {
        return `${first} ${last}`;
      }

        console.log(fullName1('Tiffany', 'Hudgens')); // "Tiffany Hudgens"
//arrow function expression
        const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
        console.log(fullName2('Tiffany', 'Hudgens')); // "Tiffany Hudgens"

        //document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);




        let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}






