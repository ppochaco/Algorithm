const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = input.shift();
const ps = input;

for (let i = 0; i < n; i++) {
  const cur_ps = ps[i];
  const stack = [];
  let answer = "YES";

  for (let j = 0; j < cur_ps.length; j++) {
    if (cur_ps[j] === "(") {
      stack.push("(");
    } else {
      if (!stack.length) {
        answer = "NO";
        break;
      }
      stack.pop();
    }
  }

  if (stack.length) answer = "NO";

  console.log(answer);
}
