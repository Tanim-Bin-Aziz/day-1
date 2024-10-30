// const p1 = {
//   name: "tanim bin aziz",
//   age: 197,
//   phone: "01719000060",
//   email: "tanimbinaziz1245@gmail.com",
// };
// const p2 = {
//   name: "tanim bin maow",
//   age: 197,
//   phone: "01719000989084060",
//   email: "tanimbinaziz1245@gmail.com",
// };
// const p3 = {
//   name: "tanim bin",
//   age: 197,
//   phone: "01719083277400060",
//   email: "tanimbinaziz1245@gmail.com",
// };
const people = [
  {
    name: "tanim bin aziz",
    age: 197,
    phone: "01719000060",
    email: "tanimbinaziz1245@gmail.com",
  },
  {
    name: "tanim bin",
    age: 197,
    phone: "01719083277400060",
    email: "tanimbinaziz1245@gmail.com",
  },
  {
    name: "tanim bin maow",
    age: 197,
    phone: "01719000989084060",
    email: "tanimbinaziz1245@gmail.com",
  },
];

// const people = [p1, p2, p3];
// console.log(people[1]);
// console.log(people[0].name);
// console.log(people[1].email);

for (p of people) {
  console.log(`${p.name} (${p.email})`);
}
