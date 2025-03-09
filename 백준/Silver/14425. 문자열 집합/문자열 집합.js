const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);

const s = new Set();
for (let i = 0; i < n; i++) {
  s.add(input[index++]);
}

let answer = 0;
for (let i = 0; i < m; i++) {
  if (s.has(input[index++])) {
    answer++;
  }
}

console.log(answer);
