// oject is the key value pair to store data

const fName = "hm";
const lName = "nayem";
const email1 = "tanimbinaziz@gmail.com";

const fName2 = "shefa";
const lName2 = "taranjum";
const email2 = "shefa12@gmail.com";

const person = ["hm", "shefa", "salvy"];

// const o = {};
// console.log(typeof o);

const person1 = {};
person1.firstName = "Tanim";
person1.lastName = "Bin Aiz";
person1.email = "tanimbinziz145@gmail.com";

// console.log(person1);
// console.log(person1.firstName);

const person2 = {
  firstName: "Tanim",
  lastName: "Bin Aziz",
  email: "tanimbinaziz145@gmail.com",
};
person2.id = "1245";
person2.age = 197;
person2.phone = "01719000060";

// console.log(person2);
// console.log(person2.email);
console.log(person2);

delete person2.id;

console.log(person2);
