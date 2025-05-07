const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input[0]);
const pack = [0, ...input[1].split(" ").map(Number)];

for (let i = 1; i <= n; i++) {
  for (let j = Math.floor(i / 2); j >= 0; j--) {
    pack[i] = Math.max(pack[i], pack[i - j] + pack[j]);
  }
}

console.log(pack[n]);
