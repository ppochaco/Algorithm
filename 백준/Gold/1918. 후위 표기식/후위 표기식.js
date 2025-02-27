const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const stack = [];
let answer = "";
for (let i = 0; i < input.length; i++) {
  const cur = input[i];

  if (cur === "(") {
    stack.push(cur);
  } else if (cur === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.pop();
  } else if (cur === "*" || cur === "/") {
    while (
      (stack.length && stack[stack.length - 1] === "*") ||
      stack[stack.length - 1] === "/"
    ) {
      answer += stack.pop();
    }
    stack.push(cur);
  } else if (cur === "+" || cur === "-") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.push(cur);
  } else {
    answer += cur;
  }
}

while (stack.length) {
  answer += stack.pop();
}

console.log(answer);
