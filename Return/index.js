function addNum() {
  let sum = 1 + 2;
  return sum;
}
// console.log(addNum());

function addNum2() {
  let sum = 1 + 2;
  return { sum: sum };
}
// console.log(addNum2());

let addNum3 = () => 1 + 2;
// console.log(addNum3);

// let addNum4 = () => {sum: 1 + 2}; //return undefined
// console.log(addNum4());

let addNum4 = () => ({ sum: 1 + 2 });
// console.log(addNum4());

// function addNum5() {
//   let sum = 1 + 2;
//   return;
//   {sum: sum} // return undefined
// }
// console.log(addNum5());

// function addNum5() {
//   let sum = 1 + 2;
//   return { sum: sum };
// }

// console.log(addNum5());

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     // break;
//     // continue;
//     // return; // will stop the loop
//   }
//   console.log(i);
// }

// [1,2,3,4,5,6,7,8,9,10].forEach(i => {
//   if(i === 5){
//     return;
//   }
//   console.log(i)
// })

// generator function

function* countNum() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

let num = countNum();
console.log(num);
console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
