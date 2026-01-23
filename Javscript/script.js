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

// let age = prompt("Enter your age:");

// if(age === null){
//   console.error("Age is null");
// } else {
//   if(age.trim() === ""){
//     console.error("Age is empty");
//   } else {
//     age = Number(age);
//     if(isNaN(age)){
//       console.error("Age is not a number");
//     }else{
//       if(age >0 && age >= 18) console.log("You are eligible to vote");
//       else if(age < 18 && age > 0) console.log("You are not eligible to vote");
//       else console.log("Invalid age");
//     }
//   }
// }

// let n = 75;
// for (let i = 1; i <= 10 ; i++) {
//   console.log(`${n} x ${i} = ${n * i}`); 
// }

// let count = 0;
// for (let i = 1; i <= 15 ; i++) {
//   if(i > 8){
//     count++;   
//   }
// }
// console.log(count);

// let count = 0;
// let pass = prompt("Enter your password:");
// count++;
// while(pass !== "stop") {
//   if(count === 3){
//   console.error("You have exceeded the maximum attempts.");
//   break;
// }
//   pass = prompt("Enter your password:");
//   count++;
// }

// let word = prompt("Enter a word:");
// let count = 0;
// while(word !== "stop"){
//   if(word === "yes"){
//     count++;
//   }
//   word = prompt("Enter a word:");
// }
// console.log(`total times yes count : ${count}`);

// for(let i = 0; i < 50; i++){
//   if(i % 7 === 0){
//     console.log(i);
//   }
// }

// let sum = 0;
// for(let i = 1; i < 31; i++){
//   if(i % 2 !== 0){
//     sum += i;
//   }
// }
// console.log(sum);

// let num = +prompt("Enter a number:");
// while(num % 2 !== 0){
//   num = +prompt("Enter a number:");
// }
// console.log(`number is : ${num}`);

// let inp1 = +prompt("Enter the starting number:");
// let inp2 = +prompt("Enter the ending number:");

// for(let i = inp1; i <= inp2; i++){
//   console.log(i);
// }

