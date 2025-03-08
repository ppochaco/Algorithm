const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const cash = Number(input.shift());
const machine_duck = input.shift().split(" ").map(Number);
const day = machine_duck.length;

function buy_and_pray(money) {
  let cur_money = money;
  let cnt = 0;

  for (let i = 0; i < day; i++) {
    if (!cur_money) break;

    if (cur_money < machine_duck[i]) continue;

    const cur_cnt = Math.floor(cur_money / machine_duck[i]);

    cnt += cur_cnt;
    cur_money -= cur_cnt * machine_duck[i];
  }

  return cur_money + machine_duck[day - 1] * cnt;
}

function timing(money) {
  let cur_money = money;
  let cnt = 0;
  let pre = 0;

  for (let i = 1; i <= day; i++) {
    if (pre >= 3) {
      cur_money += cnt * machine_duck[i - 1];
      cnt = 0;
    } else if (pre <= -3) {
      const cur_cnt = Math.floor(cur_money / machine_duck[i - 1]);

      cnt += cur_cnt;
      cur_money -= cur_cnt * machine_duck[i - 1];
    }

    if (machine_duck[i] < machine_duck[i - 1]) {
      if (pre < 0) pre -= 1;
      else pre = -1;
    } else if (machine_duck[i - 1] < machine_duck[i]) {
      if (0 < pre) pre += 1;
      else pre = 1;
    } else {
      pre = 0;
    }
  }

  return cur_money + machine_duck[day - 1] * cnt;
}

const a = buy_and_pray(cash);
const b = timing(cash);

if (a < b) {
  console.log("TIMING");
} else if (a > b) {
  console.log("BNP");
} else {
  console.log("SAMESAME");
}
