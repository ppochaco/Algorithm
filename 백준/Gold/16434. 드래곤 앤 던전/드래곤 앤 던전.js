const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, start_atk] = input[index++].split(" ").map(BigInt);
const rooms = [];
for (let i = 0; i < n; i++) {
  rooms.push(input[index++].split(" ").map(BigInt));
}

const max_hp = get_max_hp();
console.log(max_hp.toString());

function get_max_hp() {
  let left = 1n;
  let right = 10n ** 19n;

  while (left <= right) {
    const mid = (left + right) / 2n;

    if (!start_game(mid)) {
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }

  return left;
}

function start_game(max_hp) {
  let atk = start_atk;
  let hp = max_hp;

  for (let [t, a, h] of rooms) {
    if (t === 1n) {
      if (h % atk) {
        hp -= (h / atk) * a;
      } else {
        hp -= (h / atk - 1n) * a;
      }

      if (hp <= 0n) return false;
    } else if (t === 2n) {
      atk += a;
      hp += h;
      if (max_hp < hp) hp = max_hp;
    }
  }

  return true;
}
