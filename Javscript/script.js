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

// Pure Function is the function that always returns the same output for the
// same input and does not have any side effects.
// let a = 12;
// function abcd(val){
//     console.log(val + 2);

// }
// abcd(a);
// abcd(a);
// abcd(a);
// abcd(a);

// Impure Funnction is the function that has side effects or
// depends on external state.
// let a = 12;
// function abcd(val){
//   a = Math.random() + val;
//   console.log(a);

// }
// abcd(a)
// abcd(a)
// abcd(a)

// Closure is a concept in JavaScript where an inner function has access
// to the variables and parameters of its outer function, even after the
// outer function has finished executing.
// function abcd(){
//   let a = 12;
//   return(function efgh(){
//     console.log(a);
//   })
// }
// abcd();

// --------------------------------------------------------------------------------------------------------------------------------
// Array is a data structure in JavaScript that stores multiple
// values in a single variable.
// let arr = [5,6,8,3,1,9,0,8,4];
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(10)
// console.log(arr);
// let arr2 =arr.filter(function(val){
//   return val > 5;
// })
// console.log(arr2);

// Iterating Over Array-------------------------------------------------------------------------------------------------------
// let arr = [5,6,8,3,1,9,0,8,4];
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }
// arr.forEach(function(val){
//   console.log(val);
// })

// Understanding Objects in JS--------------------------------------------------------------------------------------------------
// let obj = {
//   name:"Avi",
//   age:25,
//   email:"avi@gmail.com"
// };
// let obj2 = new Object();
// console.log(obj.name);
// let obj = {
//   name:"Avi",
//   age:25,
//   email:"avi@gmail.com",
//   socials:{
//     instagram:"avi_insta",
//     facebook:"avi_fb"
//   }
// };

// function abcd(obj){
//   console.log(obj.age);

// }
// abcd({name:"Avi", age:25})
// function abcd({name,age}){      // destructuring of the object
//   console.log(name,age);

// }
// abcd({name:"Avi", age:25})

// let obj = {
//   name: "Avnish",
//   fnc: function (){
//     console.log(this);

//   }
// }
// obj.fnc();

// let arr = [1,2,3,4,5,6,7,8,9,13,14,16,18];
// let arr2 = arr.filter(function(val){
//   return val % 2 === 0;
// })
// console.log(arr2);

// let arr = [1000, 500, 2000, 1500, 3000];
// let sum = arr.reduce(function(prev, curr){
//   return prev + curr;
// })
// console.log(sum);

// let names = ["Avi", "Rahul", "Sneha", "Priya", "Amit"];
// let ans = names.some(function(name){
//   return name.length > 4;
// })
// console.log(ans);

// let user = {
//   name: "harsh",
//   age: 23,
//   email:"hehe@male.com"
// }
// Object.freeze(user);
// user.age = 27;

// INTRODUCTION TO DOM --------------------------------------------------------------------------------------------------------------------------
// var body = document.querySelector('body')
// body.style.backgroundColor = "black"

// // var h1 = document.querySelector('h1')
// // h1.innerHTML = "hello bhai "
// // h1.style.color = "lightskyblue"

// var box = document.querySelector('#box')
// box.innerHTML = "Hello from DOM !"
// box.addEventListener("click", function(){
//   box.style.backgroundColor = "lightcoral";
//   console.log("Raang badal gya bhai...");

// })


// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
// var a = Math.random() * 100;
// var b = Math.floor(a);
// console.log(a);
// console.log(b);

// var btn = document.querySelector('button')
// var box = document.querySelector("#box")

// btn.addEventListener('click',function(){
//   var c1 = Math.floor(Math.random() * 256)
//   var c2 = Math.floor(Math.random() * 256)
//   var c3 = Math.floor(Math.random() * 256)
//   box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

// })


// CREATING ELEMENT----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// btn.addEventListener('click',function(){
//   var div = document.createElement("div")
//   var x = Math.random() * 100
//   var y = Math.random() *100
//   var r = Math.random() * 100
//   var c1 = Math.floor(Math.random() * 256)
//   var c2 = Math.floor(Math.random() * 256)
//   var c3 = Math.floor(Math.random() * 256)

//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.position = "absolute";
//   div.style.left = x + "%";
//   div.style.top = y + "%";
//   div.style.transform = `rotate(${r}deg)`
//   div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//   main.appendChild(div);
// })


// SETTIMEOUT-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log("Hello1");
// setTimeout(()=>{
//   console.log("hello2");

// },1000)
// console.log("Hello3");
// var user = "Akash"
// var btn =document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click',()=>{
//   h1.innerHTML = `Hello I'm ${user}`;
//   setTimeout(()=>{
//     console.log("Change ho gya kya user ?");

//   },3000)

// })

// var a = 0
// var int = setInterval(()=>{
//   a++;
//   console.log(a);
// },1)
// setTimeout(()=>{
// clearInterval(int)
// },50000)

// var btn = document.querySelector('button')
// var h2 = document.querySelector('h2')
// var inner = document.querySelector('.inner')

// btn.addEventListener('click',function(){
//   btn.style.pointerEvents = "none";
//   var num = Math.floor(Math.random() * 50) + 50;
//   var a = 0;
//   var int = setInterval(()=>{
//     a++;
//     h2.innerHTML = a + "%";
//     inner.style.width = a + "%";
//   },num)
//   setTimeout(()=>{
//     clearInterval(int)
//     btn.innerHTML = "Downloaded"
//     btn.style.opacity = "0.5";
//     console.log("Downloaded in " + num/10 + " seconds");
//   },num * 100)
// })

// var img = document.querySelector('img')
// var love = document.querySelector('#love')

// img.addEventListener('dblclick',function(){
//   love.style.opacity = 1;
//   love.style.color = "red";
//   love.style.transform = "translate(-50%, -50%) scale(1.5)";
//   setTimeout(()=>{
//     love.style.opacity = 0;
//     love.style.transform = "translate(-50%, -50%) scale(0)";
//   },1000)
// })

// var box = document.getElementById('box')
// box.addEventListener('mouseleave', function(){
//   box.style.backgroundColor = "lightcoral";
//   console.log("Raang badal gya bhai...");
// })

// var img =document.querySelector('img')
// var msg = document.querySelector('h2 span')

// img.addEventListener('mouseenter', function(){
//   msg.innerHTML = "Ladoo Khane ka mann kar raha hai !";
// })
// img.addEventListener('mouseleave', function(){
//   msg.innerHTML = "__________";
// })

// var main = document.getElementById('main')
// var cursor = document.getElementById('cursor')

// main.addEventListener('mousemove', function(elem){
//   cursor.style.left = elem.x+ "px";
//   cursor.style.top = elem.y + "px";

// })

// var body = document.querySelector('body')
// var h1 = document.querySelector('h1')

// body.addEventListener('keydown', function(elem){
//    h1.innerHTML = `You pressed ${elem.key}`;

// })

// var allH1 = document.querySelectorAll('h1')

// var outer = document.querySelector('#outer')
// console.log(outer.childNodes);

// var btn = document.querySelectorAll('button')
// btn.forEach(function(button){
//   button.addEventListener('click',function(){
//     if(button.innerHTML === "Add Friend"){
//       button.innerHTML = "Remove Friend";
//     } else {
//       button.innerHTML = "Add Friend";
//     }
//   })
// })
// const reels = [
//     {
//         username: "codewithayush",
//         likeCount: 14820,
//         isLiked: false,
//         commentCount: 423,
//         shareCount: 92,
//         isFollowed: false,
//         caption: "Dark mode > light mode. Change my mind.",
//         video: "./reels/video1.mp4",
//         userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         username: "designbysan",
//         likeCount: 9820,
//         isLiked: true,
//         commentCount: 184,
//         shareCount: 41,
//         isFollowed: false,
//         caption: "UI tip: Padding is personality. Give your elements some space.",
//         video: "./reels/video2.mp4",

//         userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
//     },
//     {
//         username: "frontend.ninja",
//         likeCount: 22150,
//         isLiked: false,
//         commentCount: 612,
//         shareCount: 138,
//         isFollowed: true,
//         caption: "When flexbox finally aligns the way you wanted 😭🔥",
//         video: "./reels/video3.mp4",

//         userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
//     },
//     {
//         username: "travelwithriya",
//         likeCount: 54200,
//         isLiked: false,
//         commentCount: 822,
//         shareCount: 201,
//         isFollowed: false,
//         caption: "My solo Bali trip changed everything 🌴",
//         video: "./reels/video4.mp4",

//         userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
//     },
//     {
//         username: "daily.dev.quotes",
//         likeCount: 3120,
//         isLiked: true,
//         commentCount: 102,
//         shareCount: 55,
//         isFollowed: true,
//         caption: "Code. Sleep. Repeat. That’s the cycle.",
//         video: "./reels/video5.mp4",

//         userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
//     },
//     {
//         username: "fitnessbymegha",
//         likeCount: 27450,
//         isLiked: false,
//         commentCount: 540,
//         shareCount: 87,
//         isFollowed: true,
//         caption: "No gym? No problem. Do this 12-min workout at home.",
//         video: "./reels/video1.mp4",

//         userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
//     },
//     {
//         username: "streetfoodlover",
//         likeCount: 68000,
//         isLiked: true,
//         commentCount: 1304,
//         shareCount: 412,
//         isFollowed: false,
//         caption: "You won’t believe this burger exists 🤯🍔",
//         video: "./reels/video2.mp4",

//         userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
//     },
//     {
//         username: "musicbytara",
//         likeCount: 14500,
//         isLiked: false,
//         commentCount: 267,
//         shareCount: 73,
//         isFollowed: true,
//         caption: "Late night vibes // piano version 🎹✨",
//         video: "./reels/video3.mp4",

//         userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
//     },
//     {
//         username: "techreviews101",
//         likeCount: 23180,
//         isLiked: true,
//         commentCount: 481,
//         shareCount: 120,
//         isFollowed: false,
//         caption: "The most underrated smartphone of 2024 📱",
//         video: "./reels/video4.mp4",

//         userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
//     },
//     {
//         username: "learnanimations",
//         likeCount: 18740,
//         isLiked: false,
//         commentCount: 350,
//         shareCount: 92,
//         isFollowed: true,
//         caption: "GSAP can literally change your career. Start today.",
//         video: "./reels/video1.mp4",

//         userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//     }
// ];
// var allReels = document.querySelector('.all-reels')

// var sum = ''
// reels.forEach(function (elem) {
//     sum = sum + `<div class="reel">
//           <video autoplay loop muted src="${elem.video}"></video>
//           <div class="bottom">
//             <div class="user">
//               <img
//                 src="${elem.userprofile}"
//                 alt="">
//               <h4>${elem.username}</h4>
//               <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
//             </div>
//             <h3>${elem.caption}</h3>
//           </div>
//           <div class="right">
//             <div class="like">
//               <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
//               <h6>${elem.likeCount}</h6>
//             </div>
//             <div class="comment">
//               <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
//               <h6>${elem.commentCount}</h6>
//             </div>
//             <div class="share">
//               <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
//               <h6>${elem.shareCount}</h6>
//             </div>
//             <div class="menu">
//               <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
//             </div>
//           </div>
//         </div>`
// })

// allReels.innerHTML = sum
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const p = document.querySelector("p")
// const text = p.innerText;

// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// let iteration = 0

// function randomText() {
//   const str = text.split("").map((char, index) => {
//     if (index < iteration) {
//       return char
//     }
//     return characters.split("")[Math.floor(Math.random() * 52)]
//   }).join("")

//   p.innerText = str;

//   iteration += 0.2;

// }
// setInterval(randomText, 100)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let obj = {
//   name: "avi",
//   age: 23,
//   email:'avi@123',
//   password: "avi@123",
// }

// class BiscuitMaker {
//     constructor() {
//         this.name = 'ParleG';
//         this.price = 5;
//     }
// }

// let biscuit1 = new BiscuitMaker();
// let biscuit2 = new BiscuitMaker();
// let biscuit3 = new BiscuitMaker();
// let biscuit4 = new BiscuitMaker();

// class AlooChaat {
//     construtor() {
//         this.name = 'AlooChaat';
//         this.price = 50;
//         this.oil = '5ml';
//         this.maasale = ['haldi', 'lal mirch', 'garam masala']
//         this.pani = true;
//     }

//     pack() {
//         console.log("aloo chaat packed");

//     }

//     unpacked() {
//         console.log("aloo chaat unpacked");

//     }
// }

// class ChholeChaat {
//     construtor() {
//         this.name = 'AlooChaat';
//         this.price = 50;
//         this.oil = '5ml';
//         this.maasale = ['haldi', 'lal mirch', 'garam masala']
//         this.pani = true;
//     }

//     pack() {
//         console.log("aloo chaat packed");

//     }

//     unpacked() {
//         console.log("aloo chaat unpacked");

//     }
// }

// let alooChaat1 = new AlooChaat();
// alooChaat1.pack();

// class Kitaab {
//     constructor(name, price, author, color) {
//         this.name = name;
//         this.price = price;
//         this.author = author;
//         this.color = color;
//     }

//     pannaPalto() { }
//     bookmarklagao() { }
//     kitaabBandh() { }
// }

// let k1 = new Kitaab("hindi", 250, 'rajat', 'yellow');
// let k2 = new Kitaab("maths", 250, 'rohit', 'red');
// let k3 = new Kitaab("physics", 250, 'raj', 'blue');

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let obj = {
//     name: 'avit',
//     age: 24,
//     email: 'avit@123',          // object making
//     password: '123',
// }

// console.log(obj);

// class Bottel {
//     constructor() {
//         this.color = 'blue';
//         this.material = 'steel';
//         this.price = 800;
//         this.company = 'Milton';
//     }

//     thandaKarega() { }
//     garamKarega() { }
// }

// let b1 = new Bottel()
// console.log(b1);
// this is a special keyword and it always refer the immediate surrounding object
// ye apne nearest object ko store karta hai or uske refernce ko apne pas rakhta hai
// global m this ki value -> window object
// console.log(this);
// object m this ki value -> obj
// let obj1 = {
//     name: 'avi',
//     fnc: function () {
//         console.log(this);

//     }
// }
// obj1.fnc()
// constructor m this ki value -> obj
// console.log(this);
// arrow function m this ki value -> window object
// function m this ki value -> window object
// function abc() {
//     console.log(this);

// }
// abc()
// arrow function
// let c = () => {
//     console.log(this);

// }
// c()
// arrow function ki wajah se window object ki value this m aa gayi isko lexical this kehte hai

// global -> window
// function -> window
// es5 function inside object -> object
// es6 function iniside object -> window
// es5 function inside es5 function inside object -> window
// es6 function inside es5 function inside object -> object

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// call -> function chalata h and this ki value set krta h
// apply -> whai krta h jo call krta h and arguments mein phali 
//         value this ki hoti hai baaki saare arguments aaray mein jaate hai
// bind -> wahi krta h jo call krta h and aapko naya fnc deta h

// let obj = {
//     name: 'avi',
// };

// function abcd() {
//     console.log(this);

// }
// abcd.call(obj);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let Animal = class {
//     constructor() {
//         this.name = 'DP singh';       // CLASS EXPRESSION
//         this.breed = 'desi kutta'
//     }
// }

// let a1 = new Animal()

// console.log(a1);

// Hoisting is not possible in the classes means that you can not use the class before 

// class Animal {
//     constructor() {
//         this.hands = 2;
//         this.legs = 2;
//         this.breed = 'dog';
//     }
//     eat() { }
//     breathe() { }

// }

// class Kekda extends Animal {      // INHERITANCE OF ANIMAL CLASS
//     constructor() {
//         super();            // ye animal class ke constructor ko call karega
//         this.legs = 8;
//         this.hands = 0;
//     }
//     susu() { }
// }
// let k1 = new Kekda();

// class Animal {
//     constructor() {
//         this._age = 100;
//     }
//     set age(val){
//         if(val < 0){
//             console.error("not possible");
//             return;
//         }
//         this._age = val;
//         return this._age;
//     }

//     get age(){
//         return this._age;
//     }
// }
// let a1 = new Animal();
// a1.age = 15;

// let user = {
//     name: 'Avi',
//     email: 'avi@123',
//     login: function () {
//         console.log('logged in');
//     },
//     logout: function () {
//         console.log('logged out');
//     }
// }
// user.login();

// class User {
//     constructor(name, email) {
//         this.name = this.name;
//         this.email = email;
//     }
//     loggedIn() {
//         console.log("logged in");

//     }
//     loogedOut() {
//         console.log("logged Out");

//     }
// }

// let user1 = new User('Avi', 'avi@123');
// console.log(user1);
// user1.loggedIn();

// let product = {
//     name: "cap",
//     price: 3000,
//     discount: function () {
//         return this.price - 200;
//     }
// }
// console.log(product.discount());

// class Car {
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;

//     }
//     drive() {
//         console.log(this.brand + ' car is running with ' + this.speed);

//     }
// }
// let car1 = new Car('BMX', 200);
// car1.drive();
// let car2 = new Car('Audi', 250);
// car2.drive();

// class Student {
//     constructor(name, rollno) {
//         this.name = name;
//         this.rollno = rollno;
//     }
//     introduce() {
//         return this.name + " " + this.rollno;

//     }
// }
// let s1 = new Student('avi', 123);

// let obj = {
//     sayName: function () {
//         console.log(this);
//     },
//     sayArrowName: () => {
//         console.log(this);
//     }
// }
// obj.sayName()
// obj.sayArrowName();

// function Animal() {
//     this.name = 'tiger'
// }
// let a1 = new Animal();
// console.log(a1);

// function abcd() {
//     console.log(this.name);
// }
// let obj = {

//     name: 'Avi'
// }
// abcd.call(obj);
// abcd.apply(obj);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    

// js => single threaded language h
// ek kaam ek baar mein kar payegi
// /Synchronous approach

// asynchronous programming => ek saath 2 kaam kar payegi
// jo kaam time legi usse side m chala kr baaki kaam continue rakhna
// callback, promises, async & await

// callback => ek function jo turant nahi chalega ye jab chalega jab aapka
// koi kaam complete hoga

// setTimeout(function () {
//     console.log('hey');

// }, 3000);
// console.log('hello');

// function abcd(fn) {
//     fn();
// }
// abcd(function () {
//     console.log('hey');
// })


