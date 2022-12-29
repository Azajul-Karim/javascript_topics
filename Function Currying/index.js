// console.log("Function Currying");

function add(num) {
  return function (value) {
    return num + value;
  };
}

let addTwo = add(2);

console.log(addTwo(5));

console.log(add(5)(10));

function add(num) {
  return function (value) {
    return function (v) {
      return num + value + v;
    };
  };
}

const add = (num) => (value) => (v) => num + value + v;

// let addTwo = add(2);
// let withFiveAndTwo = addTwo(5);

console.log(withFiveAndTwo(5));

console.log(add(5)(10)(5));
console.dir(add(5)(10));
