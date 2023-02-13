// let items = new Map();

// items.set("Mango");
// items.set("Apple");
// items.set("Grape");

// console.log(items);

// let arrFromItems = [...items];
// let arrFromItemsKeys = [...items.keys()];

// console.log(arrFromItems);
// console.log(arrFromItemsKeys);

// --------------------------------------------------

// let items = new Map();

// items.set("one", "Topu");
// items.set("two", "sharif");
// items.set("three", "jhon");

// console.log(items.get("two"));
// console.log(items.size);
// console.log(items.keys());

// for (const item of items.keys()) {
//   console.log(item);
// }

// console.log(items.values());
// items.delete("one");

// console.log(items);

// items.clear();

// console.log(items);

// console.log(typeof items);
// console.log(items instanceof Map);

// let arrFromItems = [...items];
// let arrFromItemsKeys = [...items.keys()];
// let arrFromItemsValues = [...items.values()];

// console.log(arrFromItems);
// console.log(arrFromItemsKeys);
// console.log(arrFromItemsValues);

//-------------------------------------------------

// let addresses = new Map();

// let topu = { name: "topu", age: 25 };

// addresses.set(topu, {
//   uppazilla: "golapganj",
// });

// console.log(addresses);
// console.log(addresses.get(topu));

// topu.job = "SE";

// console.log(addresses.get(topu));

//-----------------------------------------------

// let notifications = new Map();

// function doInfoThing() {
//   console.log("info things");
// }

// notifications.set(doInfoThing, () => {
//   console.log("info notifications");
// });

// doInfoThing();

// // let infoNotification = notifications.get(doInfoThing);
// notifications.get(doInfoThing)();

// // console.log(infoNotification());

//................... new Set()...........................

// let items = ["mango", "mango", "orange", "orange"];
let items = new Set(["mango", "mango", "orange", "orange"]);

items.add("apple");

console.log(items.keys());
