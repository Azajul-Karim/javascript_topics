// Destructuring and spreading

// let name = "Topu";

let info = {
  name: "Topu",
  age: 25,
  address: "Golapganj",
};

console.log(info.name);

let { name, age } = info;
// console.log(name, age);

// let { name: topuname, age: topuage } = info;
// console.log(topuname, topuage);

// let { name: topuname, ...restinfo } = info;
// console.log(topuname, restinfo);

let moreinfo = {
  study: "Honours",
};
let allowmoreinfo = true;

let finalinfo = {
  ...info,
  ...(allowmoreinfo ? moreinfo : {}),
};

console.log(finalinfo);

let fruits = ["Apple", "Mango", "Grape"];

// let [fruit1, fruit2, fruit3] = fruits;
// console.log(fruit1, fruit2, fruit3);

// let [fruit1] = fruits;
// console.log(fruit1);

// let [fruit] = fruits;
// let [, , fruit3] = fruits;
// console.log(fruit, fruit3);

// let [fruit, ...restfruit] = fruits;
// console.log(fruit, restfruit);

// let { 0: fruit, 2: fruit3 } = fruits;
// let { 0: fruit, ...fruit3 } = fruits; // that will make rest fruits as object
// console.log(fruit, fruit3);

let fruitsalt = ["Guava", "Melon"];
let finalfruits = [...fruits, ...fruitsalt];

let allowmorefruits = true;

// if(allowmorefruits){
//   let finalfruits = [...fruits, ...fruitsals];
// }else{
//   let finalfruits = [...fruits];
// }

// let finalfruits = [...fruits, ...(allowmorefruits ? fruitsalt : [])];
// console.log(finalfruits);
