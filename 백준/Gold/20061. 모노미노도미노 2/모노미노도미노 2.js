const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);

let green = Array.from({ length: 6 }, () => Array(4).fill(0));

let blue = Array.from({ length: 6 }, () => Array(4).fill(0));

let score = 0;
let count = 0;

for (let i = 0; i < n; i++) {
  let [t, x, y] = input[index++].split(" ").map(Number);

  move_block(green, t, y);

  if (t === 2) {
    t = 3;
  } else if (t === 3) {
    t = 2;
    x++;
  }

  move_block(blue, t, 3 - x);
}

get_count(green);
get_count(blue);

console.log(score);
console.log(count);

function move_block(color, t, y) {
  let x = 0;
  while (true) {
    if (x === 5) break;
    if (color[x + 1][y]) break;
    if (t === 2 && color[x + 1][y + 1]) break;
    x++;
  }

  color[x][y] = 1;
  if (t === 2) color[x][y + 1] = 1;
  if (t === 3) color[x - 1][y] = 1;

  for (let i = 2; i < 6; i++) {
    let cnt = 0;
    for (let j = 0; j < 4; j++) {
      cnt += color[i][j];
    }

    if (cnt === 4) {
      score++;
      color.splice(i, 1);
      color.splice(0, 0, Array(4).fill(0));
    }
  }

  while (true) {
    let cnt = 0;
    for (let i = 0; i < 4; i++) {
      cnt += color[1][i];
    }

    if (cnt) {
      color.pop();
      color.splice(0, 0, Array(4).fill(0));
    } else break;
  }
}

function get_count(color) {
  for (let i = 2; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (color[i][j]) count++;
    }
  }
}
