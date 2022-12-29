function sayHello() {
  console.log(arguments);
  console.log(arguments[2]);
  arguments.forEach((element) => {
    console.log(element);
  });

  // this will throw a typeerror

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

sayHello(1, 2, 3, 4);

// use arguments with spread

function sayHello(a) {
  console.log(arguments);

  let spreadArguments = [...arguments];

  spreadArguments.forEach((element) => {
    console.log(element);
  });
  console.log(spreadArguments);
}

sayHello(1, 2, 3, 4);

function sayHello(...args) {
  console.log(args);
}

sayHello(1, 2, 3, 4, 5);

// default parameter

function sayFullName(firstName, lastName) {
  var firstName = firstName || "";
  var lastName = lastName || "";
  console.log(firstName + " " + lastName);
}

function sayFullName(firstName = "", lastName = "") {
  console.log(firstName + " " + lastName);
}

function sayFullName(
  nameObj,
  defaultObj = {
    ...{
      firstName: "",
      lastName: "",
    },
    ...nameObj,
  }
) {
  console.log(defaultObj.firstName + " " + defaultObj.lastName);
}

sayFullName({ lastName: "Topu" });
