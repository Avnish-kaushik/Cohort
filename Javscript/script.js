{
  var a = 12;
}
console.log(a);
// var allows the variable to be redeclared and reassigned and run outside the scope.

{
  let b = 15;
  console.log(b);

}
console.log(b);
// let allows the variable to be reassigned but not redeclared and runs only within the scope.

{
  const c = 40;
console.log(c);
}

var name = prompt("What's your name ?");
console.log(name);
// prompt allows to input a value from user via browser.

alert("Hello, User");
// alert allows the user to display a message in a pop-up window on the browser.