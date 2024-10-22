// Traverse Array Elements
// const arr = [1, 2, 3, 4, 5];
const arr = [38, 53, 63, 21, 49, 98, 256];

const n = arr[3];
const m = arr[2];
const x = 1,
  y = 0;

// console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);

/**
 * 1 2 3 4 5
 * 0 1 2 3 4
 *
 * 'A' 'B' 'C' 'D'
 *  0   1   2   3
 *
 * 1 B 3 5 F 0 true
 * 0 1 2 3 4 5 6
 *
 */

// simple Traverse

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// Array Sum & Avg
/**
 * sum = 0
 * sum = 0 + 1 = 1
 * sum = 1 + 2 = 3
 * sum = 3 + 3 = 6
 * sum = 6 + 4 = 10
 */
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// console.log(sum);
// console.log(sum / arr.length);

// Find Large Number

let largeNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largeNumber) {
    largeNumber = arr[i];
  }
}
console.log(largeNumber);
