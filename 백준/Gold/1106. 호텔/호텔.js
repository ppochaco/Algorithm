const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [c, n] = input.shift().split(" ").map(Number);

const INF = 100_001;
const money = [0, ...Array.from({ length: c }, () => INF)];

for (let i = 0; i < n; i++) {
  const [cost, customer] = input[i].split(" ").map(Number);

  for (let cur_customer = 0; cur_customer <= c; cur_customer++) {
    money[cur_customer] = Math.min(
      money[cur_customer],
      cur_customer < customer ? cost : money[cur_customer - customer] + cost
    );
  }
}

console.log(money[c]);
