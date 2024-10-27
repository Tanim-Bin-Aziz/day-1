/**
 * Array of Anything
 */

const arr = [10, "Ten", true, getTen, { ten: 10 }, [10, 10]];
// console.log(arr);

function getTen() {
  return 10;
}
// Array of objects

const favChannels = [
  {
    name: "stack learner",
    url: "https://www.youtube.com/watch?v=Ky1_8cdIQBw&t=18037s",
    name: "Js Bangladesh",
    url: "https://www.youtube.com/watch?v=Ky1_8cdIQBw&t=18037s",
    name: "Traversy Media",
    url: "https://www.youtube.com/watch?v=Ky1_8cdIQBw&t=18037s",
    name: "Was Bos",
    url: "https://www.youtube.com/watch?v=Ky1_8cdIQBw&t=18037s",
  },
];

// Array function
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

// Loop and call all fucntions from array
const funcs = [sum, sub, times, div, mod];
const a = 10,
  b = 20;
for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  // console.log(`[${funcs[i].name}] Result = ${result}`);
}

// Array of Arrays - multi Dimensonal Array

const pointTable = [
  [0, 0],
  [3, 5],
  [5, 7],
  [10, 23],
];

// One Dimensonal Traverse Way
for (let i = 0; i < pointTable.length; i++) {
  // console.log(`Point ${i} - x=${pointTable[i][0]} and y=${pointTable[i][1]}`);
}

// Two Dimensonal Traverse Way

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    // console.log(numbers[i][j]);
  }
}
// for (let j = 0; j < numbers.length; j++) {
//   console.log(numbers[1][j]);
// }

// console.log(numbers[1][0]);

for (let i = 0; i < pointTable.length; i++) {
  for (let j = 0; j < pointTable[i].length; j++) {
    console.log(`Point [${i},${j}] = ${pointTable[i][j]}`);
  }
}
