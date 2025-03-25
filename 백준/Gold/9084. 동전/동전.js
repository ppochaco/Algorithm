const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
let t = Number(input[index++]);

while (t--) {
  const n = Number(input[index++]);
  const coins = input[index++].split(" ").map(Number);
  const m = Number(input[index++]);

  const money = Array.from({ length: m + 1 }, () => 0);
  money[0] = 1;

  for (let i = 0; i < n; i++) {
    const coin = coins[i];
    for (let cur_money = 1; cur_money <= m; cur_money++) {
      if (0 <= cur_money - coin) {
        money[cur_money] += money[cur_money - coin];
      }
    }
  }

  console.log(money[m]);
}
