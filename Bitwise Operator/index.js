var num = 4;

console.log("Binary " + num.toString(2)); // 100
console.log("Octal " + num.toString(8)); // 12
console.log("Hex " + num.toString(16)); // 4

console.log("Binary to Decimal " + parseInt("100", 2)); // 4
console.log("Octal to Decimal " + parseInt("4", 8)); // 4
console.log("Hex to Decimal " + parseInt("4", 16)); // 4

// console.log(parseInt("00000010", 2));
// let bnum = 0b00001010; // 10
// console.log(bnum);
// console.log(parseInt(bnum, 2));

// 1 = 00000001
// 2 = 00000010
// 1 | 2 = 00000011 //3
let binOne = 0b00000001;
let binTwo = 0b00000010;
let binThree = 0b00000011;

console.log((binOne | binTwo).toString(10));
console.log((binOne & binThree).toString(10));
console.log((binOne ^ binThree).toString(10));

let permission = 0;

let read = 4;
let write = 2;
let execute = 1;

permission = write | execute;

let check = permission & read ? "Yes" : "No";

console.log(check);

function evenOrOdd(num) {
  return num & 1 ? "odd" : "even";
}

console.log(evenOrOdd(4));

// 00000101
// 00000001
