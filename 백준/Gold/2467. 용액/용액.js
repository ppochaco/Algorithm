const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const nums = input.shift().split(" ").map(Number);
nums.sort((a, b) => a - b);

let start = 0;
let end = n - 1;
let min_index = { start, end };

while (start < end) {
  const sum = nums[start] + nums[end];

  if (Math.abs(sum) < Math.abs(nums[min_index.end] + nums[min_index.start])) {
    min_index = { start, end };
  }

  if (sum < 0) {
    start++;
  } else if (sum > 0) {
    end--;
  } else {
    min_index = { start, end };
    break;
  }
}

console.log(nums[min_index.start], nums[min_index.end]);
