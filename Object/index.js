const obj = {
  greeting: "Hello",
};
// obj = {};
obj.greeting = "Hello";
// console.log(obj);

let person = {
  name: "Topu",
  age: 25,
  adress: "Golapganj",
};
// That is not pass by value, it is pass by reference
// let personMoreInfo = person;

// You have to clone/copy object like this
// let personMoreInfo = JSON.parse(JSON.stringify(person));
// let personMoreInfo = Object.assign({}, person);
// let personMoreInfo = { ...person };
// personMoreInfo.phone = "01234567890";
// personMoreInfo.email = "topu@mail.com";
// console.log(person);
// console.log(personMoreInfo);

// for (let prop in person) {
//   console.log(person[prop]);
// }

// Object.keys(), Object.values(), Object.entries()

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// for (let key of Object.keys(person)) {
//   console.log(person[key]);
// }

// for (let value of Object.values(person)) {
//   console.log(value);
// }

// for (let [key, value] of Object.entries(person)) {
//   console.log(`${key}:${value}`);
// }

let moreInfo = {
  age: 26,
  email: "azajul@mail.com",
  phone: "1234567888",
};

let AgainMoreInfo = {
  education: "Honour",
};

// let newInfo = Object.assign(person, moreInfo);
// let newInfo = { ...person, ...moreInfo, ...AgainMoreInfo };

// console.log(newInfo);
