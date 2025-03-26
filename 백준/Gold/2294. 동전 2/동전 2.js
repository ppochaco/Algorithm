const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const coins = input.map(Number);

const INF = 10_001;
const coin_cnt = [0, ...Array.from({ length: k }, () => INF)];

for (let i = 0; i < n; i++) {
  const coin = coins[i];
  for (let cur_value = coin; cur_value <= k; cur_value++) {
    coin_cnt[cur_value] = Math.min(
      coin_cnt[cur_value],
      coin_cnt[cur_value - coin] + 1
    );
  }
}

if (coin_cnt[k] === INF) {
  console.log(-1);
} else {
  console.log(coin_cnt[k]);
}
