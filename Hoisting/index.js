// Variable Hoisting

// console.log(name);

// var name = "Topu";

//in js there 2 types of scopes , function scope and block scope
//in function scope variable will not be hoisted
// function sayName() {
//   console.log("ln 8", name);

//   var name = "Sharif";
//   console.log("ln 8", name);
// }

// sayName();
// console.log("ln 8", name);
//----------------------------------------------------------------
// "use strict";
// // var name = "Topu";
// function sayName() {
//   // console.log("ln 8", name);

//   name = "Sharif";
//   console.log("ln 8", name);
// }

// sayName();
// console.log("ln 8", name);
// console.log("name" in window);
//----------------------------------------------------------------
//var name = "Topu";

// if (true) {
//   console.log("ln 8", name);
//   // here name variable holding outer scope's referance , // value is = Topu

//   var name = "Sharif";

//   console.log("ln 8", name);
//   // here assigning value to name variable changes outer scope's referance  , // value would be = Sharif
// }

// console.log("ln 15", name);
// // name variabe changed inside 'if block' thats why value would be = Sharif, and its called that name variable is hosited
//---------------------------------------------------------------
//var name = "Topu";

// if (true) {
//   // console.log("ln 8", name);
//   // because of 'let' name variable is not hoisted, so it will throw 'variable is not initialized' error

//   let name = "Sharif";

//   console.log("ln 8", name);
//   // Sharif
// }

// console.log("ln 15", name);
// // Topu
//---------------------------------------------------------------
// for (var i = 0; i <= 10; i++) {
//   console.log(i); //1 to 10
// }

// console.log("outer", i); // 11
//---------------------------------------
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// console.log("outer", i);

// afunc();
// function afunc() {
//   var a = 10;
//   var b = 20;
//   var sum = a + b;
//   console.log("Sum: " + sum);
// }
