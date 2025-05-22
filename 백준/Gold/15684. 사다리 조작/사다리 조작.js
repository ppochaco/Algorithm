const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m, h] = input[index++].split(" ").map(Number);
const ladder = Array.from({ length: h + 1 }, () => Array(n + 1).fill(0));
for (let i = 0; i < m; i++) {
  const [a, b] = input[index++].split(" ").map(Number);
  ladder[a][b] = 1;
}

const candidate = [];
for (let i = 1; i <= h; i++) {
  for (let j = 1; j < n; j++) {
    if (ladder[i][j] === 1) continue;
    if (1 <= j - 1 && ladder[i][j - 1] === 1) continue;
    if (j + 1 <= n && ladder[i][j + 1] === 1) continue;

    candidate.push([i, j]);
  }
}

let answer = -1;
for (let i = 0; i <= 3; i++) {
  add_ladder(i, [], 0);
  if (answer !== -1) {
    break;
  }
}
console.log(answer);

function add_ladder(k, arr, index) {
  if (arr.length === k) {
    const copy_ladder = ladder.map((l) => l.slice());
    for (let i = 0; i < arr.length; i++) {
      const [x, y] = arr[i];
      copy_ladder[x][y] = 1;
    }

    for (let i = 1; i <= n; i++) {
      if (i !== down_ladder(copy_ladder, 0, i)) {
        return;
      }
    }
    answer = k;
    return;
  }

  for (let i = index; i < candidate.length; i++) {
    let check = false;
    for (let j = 0; j < arr.length; j++) {
      const [x, y] = arr[j];
      const [nx, ny] = candidate[i];
      if (x === nx && ny - y === 1) {
        check = true;
        break;
      }
    }
    if (check) continue;

    add_ladder(k, [...arr, candidate[i]], i + 1);
  }
}

function down_ladder(ladder, x, y) {
  while (x <= h) {
    if (ladder[x][y - 1]) {
      y -= 1;
    } else if (ladder[x][y]) {
      y += 1;
    }

    x++;
  }

  return y;
}
