const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

const virus = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 2) {
      virus.push([i, j]);
    }
  }
}

let answer = Infinity;
pick_virus(0, []);

if (answer === Infinity) console.log(-1);
else console.log(answer);

function spread_virus(arr) {
  const queue = [];

  const visited = Array.from({ length: n }, () => Array(n).fill(-1));

  for (let i = 0; i < arr.length; i++) {
    const [x, y] = arr[i];
    queue.push([x, y]);
    visited[x][y] = 0;
  }

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      if (visited[nx][ny] !== -1) continue;

      if (board[nx][ny] === 1) continue;

      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  let time = 0;
  let check = false;
  for (let i = 0; i < n; i++) {
    if (check) break;
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) continue;

      if (board[i][j] === 0 && visited[i][j] !== -1) {
        time = Math.max(time, visited[i][j]);
      } else if (board[i][j] === 0 && visited[i][j] === -1) {
        check = true;
        break;
      }
    }
  }

  if (!check) return time;
  else return -1;
}

function pick_virus(index, arr) {
  if (arr.length === m) {
    const time = spread_virus(arr);
    if (time !== -1) {
      answer = Math.min(answer, time);
    }
    return;
  }

  for (let i = index; i < virus.length; i++) {
    pick_virus(i + 1, [...arr, virus[i]]);
  }
}
