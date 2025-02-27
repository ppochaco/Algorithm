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

const answer = new Set();
for (let i = 1; i <= parentheses_index.length; i++) {
  const i_combinations = combinations(parentheses_index, i);

  for (let j = 0; j < i_combinations.length; j++) {
    const temp = [...input];
    for (let k = 0; k < i_combinations[j].length; k++) {
      const cur = i_combinations[j][k];
      temp[cur.start] = temp[cur.end] = " ";
    }
    answer.add(temp.join("").replace(/ /g, ""));
  }
}

console.log([...answer].sort().join("\n"));

// 조합
function combinations(arr, r) {
  const result = [];

  function combination(cur_arr, index) {
    if (cur_arr.length === r) {
      result.push([...cur_arr]);
      return;
    }

    for (let i = index; i < arr.length; i++) {
      cur_arr.push(arr[i]);
      combination(cur_arr, i + 1);
      cur_arr.pop();
    }
  }

  combination([], 0);
  return result;
}
