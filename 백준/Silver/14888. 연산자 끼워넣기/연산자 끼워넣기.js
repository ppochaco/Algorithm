const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const op_cnt = input[2].split(" ").map(Number);
const operators = [];
for (let i = 0; i < 4; i++) {
  operators.push(...Array(op_cnt[i]).fill(i));
}

let min_result = Infinity;
let max_result = -Infinity;

make_expression(0, nums[0]);
max_result === 0 ? console.log(0) : console.log(max_result);
min_result === 0 ? console.log(0) : console.log(min_result);

function make_expression(index, result) {
  if (index === n - 1) {
    min_result = Math.min(min_result, result);
    max_result = Math.max(max_result, result);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (op_cnt[i] > 0) {
      op_cnt[i]--;
      make_expression(index + 1, calculate(result, nums[index + 1], i));
      op_cnt[i]++;
    }
  }
}

function calculate(a, b, op) {
  if (op === 0) {
    a += b;
  } else if (op === 1) {
    a -= b;
  } else if (op === 2) {
    a *= b;
  } else {
    if (a < 0) {
      a = -Math.floor(-a / b);
    } else {
      a = Math.floor(a / b);
    }
  }

  return a;
}
