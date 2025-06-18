const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let robot = Array.from({ length: n }, () => false);
let level = 1;

while (true) {
  arr = [arr.pop(), ...arr.slice()];
  robot = [robot.pop(), ...robot.slice()];

  if (robot[n - 1]) {
    robot[n - 1] = false;
  }

  for (let i = n - 1; i >= 0; i--) {
    if (robot[i] && !robot[i + 1] && arr[i + 1]) {
      robot[i] = false;
      robot[i + 1] = true;
      arr[i + 1]--;
    }
  }

  if (robot[n - 1]) {
    robot[n - 1] = false;
  }

  if (arr[0]) {
    robot[0] = true;
    arr[0]--;
  }

  let cnt = 0;
  for (let i = 0; i < 2 * n; i++) {
    if (arr[i] === 0) {
      cnt++;
    }
  }

  if (k <= cnt) break;

  level++;
}

console.log(level);
