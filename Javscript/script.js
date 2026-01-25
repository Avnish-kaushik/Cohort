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

// let balance = 1000;
// let amt = +prompt("Enter the amount to withdraw:");

// if(amt > balance){
//   console.error("Insufficient balance");
// } else {
//   console.log(`Withdrawal successful. Remaining balance: ${balance - amt}`);
// }

// do..while in JS
// let i = 1;
// do{
//   console.log(i);
//   i++;
// } while(i <= 5);


// FUNCTIONS IN JAVASCRIPT-----------------------------------------------------------------------------------
// functions are reusable blocks of code that perform a specific task.

// function doSomething(){
//   console.log(arguments[0]);
  
// }
// doSomething("hello", "world");

// Rest Parameters
// function abcd(a,b,...c){
// console.log(a,b,c);

// }
// abcd(1, 2, 3, 4, 5)

// Hoisting
// it is a mechanism in JavaScript where variables and function 
// declarations are moved to the top of their scope before code execution.
// abcd(); --> hello
// function abcd(){         
//   console.log("hello");      Allowed function hoisting only

// }
// a(); ---> Not a function
// var a = function abcd(){
//   console.log("Hello");       Variable hoisting is not allowed
  // }
// }

// function abcd(a, b) {   // if we make parameters and don't 
//   console.log(a, b);    // pass arguments, it will be undefined
// }                       // and they are called the required parameters.
// abcd()

// function abcd({name,age}){
//   console.log(name);
//   console.log(age);
  
//                             // Destructured parameters in javascript
// }
// abcd({name:"Avnish", age:20});

// function abcd(a,b,c = 0){
//   console.log(a,b,c);
//                           // when a value of any parameter is not passed,
//                           // it will become undefined. To solve this we 
//                           // assign the default values in case of no argument
//                           // is passed by the user.
// }
// abcd(1,2);

// function abcd(a,b,c,d){
//   console.log(a,b,c,d);
  
// }
// let arr = [1,2,3,4];
// abcd(...arr);            // Spread Operator 

// function abcd(){
//   function defg(){         // Nested Function : function inside the function
//     console.log("defg chalega");
//   }
//   defg();
// }
// abcd();

// let a = 12;        // Gloabl Scope variable
// function abcd(){
//   let b = 13;       // Local Scope variable, 
//                     // only be used inside the paarticular block of code
//   function defg(){
//     console.log(b);
    
//   }
// }
// abcd();

// (function abcd(){   // Immediately Invoked Expression : used to make the 
//                     // private variables
// let balance = 8000;
// })();

// let fnc = () =>{         // Arrow function or Fat Arrow function
//   console.log("Hello");
  
// }
// fnc();

// function() {                // Anonymous Function
//   console.log("Hello Bhai");
  
// }

// function abcd(){ // Higher Order function : A function that can return 
                   //  another function Or it can accept the another 
                   // function in his parameter
//  return function(){

// }
// }
// function abcd(a){

// }
// abcd(function (){

// })

// function abcd(v){

// }
// abcd(function (){  // Function that is passed as an argument 
                      // to a function is called Callback function

// })

// First Class Function is a concept where function can be used as value or variable
// let a = 12;
// let b = function () {
// }
