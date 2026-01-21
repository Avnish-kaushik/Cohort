// {
//   var a = 12;
// }
// console.log(a);
// var allows the variable to be redeclared and reassigned and run outside the scope.


//   let b = 15;
//   console.log(b);


// console.log(b);
// let allows the variable to be reassigned but not redeclared and runs only within the scope.

// {
//   const c = 40;
// console.log(c);
// }

// var username = prompt("What's your name ?");
// prompt allows to input a value from user via browser. And treat it as a String.

// alert(`Hello, ${name}!`);
// alert allows the user to display a message in a pop-up window on the browser.

// console.log("Avi");
// console.info("Avi");
// console.warn("Avi");
// console.error("Avi");

// OPERATORS IN JS--------------------------------------------------------------------

// Airthmetic Operator
// + - * / % **

// Assignment Operator
// = += -= *= /=

// Ternary Operator
// (? : ) condition ? true : false

// Logical Operators
// &&-> And || -> Or ! -> Not

// Comparison Operators
// == != === !== > < >= <=

// NOTE : === Always use this over the ==
// === checks both value and type, while == only checks value.


// Understanding the conditonals in javascript - {`if` , `else` , `else if` , 
// `Ternary Operator`, `switch-case`}

// when you have to check something before running the code then we use 
// the conditions to check it and conditional operators are used to check
// those things.

// Example:  to check the user age for voting
// var age = prompt("Enter your age");
// if(age > 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// var age = prompt("Enter your age");
// age > 18 ? console.log("Can Vote") : console.log("Cannot Vote");

// var age = prompt("Enter your age");
// switch(age) {
//   case 1:
//     console.log("You are 1");
//     break;
//   case 2:
//     console.log("You are 2");
//     break;
//   default:
//     console.log("You are not 1 or 2");
// }


// LOOPS IN JS----------------------------------------------------------------------------

// for loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

