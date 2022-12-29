// let name = "Jhon";

// function sayGreeting() {
//   let name_2 = "Robert";
//   console.log(name);
//   console.log(name_2);
// }

// sayGreeting();

// console.dir(sayGreeting);

// function outer() {
//   let name = "Jhon";

//   function inner() {
//     console.log(name);
//   }
//   inner();
//   console.dir(inner);
// }
// outer();

// function sayNum() {
//   let i = 1;
//   function inner(i) {
//     console.log(i);
//   }
//   for (; i <= 3; i++) {
//     setTimeout(
//       (() => {
//         inner(i);
//       })(),
//       1000
//     );
//   }
// }
// sayNum();

function closuresDemo() {
  var x = 10;
  function anotherFunc() {
    var y = 20;
    console.log("sum: " + (x + y));
  }
  return anotherFunc;
}
var returnFunc = closuresDemo();
returnFunc();
