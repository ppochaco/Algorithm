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
add_ladder(0, [], 0);
console.log(answer);

function add_ladder(k, arr, index) {
  if (down_ladder(ladder)) {
    answer = k;
    return;
  }

  if (answer !== -1) return;
  if (k === 3) return;

  for (let i = index; i < candidate.length; i++) {
    let check = false;
    const [nx, ny] = candidate[i];
    for (let j = 0; j < arr.length; j++) {
      const [x, y] = arr[j];
      if (x === nx && ny - y === 1) {
        check = true;
        break;
      }
    }
    if (check) continue;

    ladder[nx][ny] = 1;
    add_ladder(k + 1, [...arr, candidate[i]], i + 1);
    ladder[nx][ny] = 0;
  }
}

function down_ladder(ladder) {
  for (let i = 1; i <= n; i++) {
    let x = 0;
    let y = i;
    while (x <= h) {
      if (ladder[x][y - 1]) {
        y -= 1;
      } else if (ladder[x][y]) {
        y += 1;
      }

      x++;
    }
    if (y !== i) return false;
  }

  return true;
}
