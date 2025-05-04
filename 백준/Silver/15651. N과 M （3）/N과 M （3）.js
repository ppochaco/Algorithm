const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [n, m] = input.split(" ").map(Number);
let answer = "";

function permutation(cur) {
  if (cur.length === m) {
    answer += cur.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    cur.push(i);
    permutation(cur);
    cur.pop();
  }
}

permutation([]);
console.log(answer);
