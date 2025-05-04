const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [n, m] = input.split(" ").map(Number);
let answer = [];

function permutation(index, cur) {
  if (cur.length === m) {
    answer.push(cur.join(" "));
    return;
  }

  for (let i = index; i <= n; i++) {
    cur.push(i);
    permutation(i, cur);
    cur.pop();
  }
}

permutation(1, []);

console.log(answer.join("\n"));
