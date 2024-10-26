/**
 * Array of Anything
 */

const arr = [10, "Ten", true, getTen, { ten: 10 }, [10, 10]];
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
