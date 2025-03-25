const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, t] = input[index++].split(" ").map(Number);
const grade = Array.from({ length: t + 1 }, () => 0);

for (let i = 0; i < n; i++) {
  const [k, s] = input[index++].split(" ").map(Number);
  for (let cur_time = t; cur_time >= k; cur_time--) {
    grade[cur_time] = Math.max(grade[cur_time], grade[cur_time - k] + s);
  }
}

console.log(grade[t]);
