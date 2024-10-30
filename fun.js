const arr1 = [4, 6, 10, 2, 34, 4, 6, 3, 12, 3];
const arr2 = [72, 2, 4, 51, 6, 312, 6, 4, 7, 3];

let max = arr1[0];
for (let v of arr1) {
  if (v > max) {
    max = v;
  }
}
console.log(max);
