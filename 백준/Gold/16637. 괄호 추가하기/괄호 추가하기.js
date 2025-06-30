const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const arr = input.shift().split("");
const numbers = arr.filter((_, index) => !(index % 2)).map(Number);
const operators = arr.filter((_, index) => index % 2);

let answer = -Infinity;
dfs(0, numbers[0]);
console.log(answer);

function dfs(index, nums) {
  if (operators.length === index) {
    answer = Math.max(answer, nums);
    return;
  }

  dfs(index + 1, calculate(nums, operators[index], numbers[index + 1]));

  if (index + 2 < numbers.length) {
    const next_calculate_nums = calculate(
      numbers[index + 1],
      operators[index + 1],
      numbers[index + 2]
    );

    dfs(index + 2, calculate(nums, operators[index], next_calculate_nums));
  }
}

function calculate(num1, op, num2) {
  if (op === "+") return num1 + num2;
  if (op === "-") return num1 - num2;
  if (op === "*") return num1 * num2;
}
