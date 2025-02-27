const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const parentheses_index = [];
const stack = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push(i);
  }
  if (input[i] === ")") {
    parentheses_index.push({ start: stack.pop(), end: i });
  }
}

let answer = new Set();

function dfs(depth, arr, index) {
  if (depth === parentheses_index.length) {
    if (index === parentheses_index.length) return;

    answer.add(arr.join(""));
    return;
  }

  const { start, end } = parentheses_index[depth];

  arr[start] = "(";
  arr[end] = ")";
  dfs(depth + 1, arr, index + 1);

  arr[start] = arr[end] = "";
  dfs(depth + 1, arr, index);
}

dfs(0, [...input], 0);

answer = [...answer].sort();
console.log(answer.join("\n"));
