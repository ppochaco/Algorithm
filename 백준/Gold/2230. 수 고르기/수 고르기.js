const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(Number(input[index++]));
}

arr.sort((a, b) => a - b);

let start = 0;
let end = 1;
let answer = Math.max(...arr) - Math.min(...arr);
while (start <= end && end < n) {
  const distance = arr[end] - arr[start];
  if (distance < m) end++;
  else if (m < distance) {
    start++;
    answer = Math.min(answer, distance);
  } else {
    answer = distance;
    break;
  }
}

console.log(answer);
