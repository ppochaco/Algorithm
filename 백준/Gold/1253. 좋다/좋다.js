const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let answer = 0;

arr.forEach((num, index) => {
  let start = 0;
  let end = n - 1;

  while (start < end) {
    const sum = arr[start] + arr[end];

    if (sum < num) start++;
    else if (num < sum) end--;
    else {
      if (start === index) start++;
      else if (end === index) end--;
      else {
        answer++;
        break;
      }
    }
  }
});

console.log(answer);
