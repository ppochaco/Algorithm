const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("");

const stack = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const is_lazer = input[i] + input[i + 1] === "()";

  if (is_lazer) {
    answer += stack.length;
    i++;
  } else {
    if (input[i] === "(") {
      stack.push(input[i]);
    } else {
      answer++;
      stack.pop();
    }
  }
}

console.log(answer);
