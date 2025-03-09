const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);

const s = new Map();
for (let i = 0; i < n; i++) {
  s.set(input[index++], 0);
}

for (let i = 0; i < m; i++) {
  const str = input[index++];
  if (s.get(str) !== undefined) {
    s.set(str, s.get(str) + 1);
  }
}

let answer = 0;
for (let [_, cnt] of s) {
  answer += cnt;
}

console.log(answer);
