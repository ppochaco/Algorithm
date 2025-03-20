const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [n, s] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

nums.sort((a, b) => a - b);

function combination(arr, r) {
  const result = [];

  function combine(cur_arr, index) {
    if (cur_arr.length === r) {
      result.push([...cur_arr]);
      return;
    }

    for (let i = index; i < arr.length; i++) {
      cur_arr.push(arr[i]);
      combine(cur_arr, i + 1);
      cur_arr.pop(arr[i]);
    }
  }

  combine([], 0);

  return result;
}

let answer = 0;
for (let i = 1; i <= n; i++) {
  for (let combi of combination(nums, i)) {
    if (s === combi.reduce((pre, cur) => pre + cur, 0)) answer++;
  }
}

console.log(answer);
