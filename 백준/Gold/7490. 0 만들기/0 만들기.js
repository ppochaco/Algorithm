const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .split('\n')
  .map(Number);

const targets = new Set(input);
const n = Math.max(...input);
const result = Array.from({ length: n + 1 }, () => []);

dfs(1, '');

const answer = [];
result.forEach((cur) => {
  if (cur.length) answer.push(cur.join('\n'));
})
console.log(answer.join('\n\n'));


function dfs(index, expression) {
  if (n < index) return;

  expression += index;
  if (targets.has(index) && is_zero(expression)) {
    result[index].push(expression);
  }
  dfs(index + 1, expression + ' ');
  dfs(index + 1, expression + '+');
  dfs(index + 1, expression + '-');
}

function is_zero(expression) {
  const result = calculate(expression.replaceAll(" ", ""));
  if (result === 0) return true;
  return false;
}

function calculate(str) {
  const arr = str.match(/(\d+)|\+|\-/g);
  let result = Number(arr[0]);
  
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === '-') result -= Number(arr[i + 1]);
    if (arr[i] === '+') result += Number(arr[i + 1]);
  }

  return result;
}