const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = Number(input.shift());
const l = input.shift().split(" ").map(Number);
const j = input.shift().split(" ").map(Number);
const life = Array.from({ length: 100 + 1 }, () => 0);

for (let i = 0; i < n; i++) {
  for (let cur_life = 100; cur_life - l[i] > 0; cur_life--) {
    life[cur_life] = Math.max(life[cur_life], life[cur_life - l[i]] + j[i]);
  }
}

console.log(life[100]);
