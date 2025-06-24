const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const n = 5;
const SEVEN = 7;
const girls = [];
for (let i = 0; i < n; i++) {
  girls.push(input.shift().split(""));
}

const girls_index = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    girls_index.push([i, j]);
  }
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let answer = 0;
get_seven_girls([], 0);
console.log(answer);

function is_seven_queens(arr) {
  const board = Array.from({ length: n }, () => Array(n).fill(0)); // 1: 여학생, 2: 공주 체크
  const queue = [];
  let s_girls = 0;
  let queens = 0;

  for (const [x, y] of arr) {
    board[x][y] = 1;
  }

  const [x, y] = arr[0];
  board[x][y] = 2;
  queue.push([x, y]);
  if (girls[x][y] === "S") s_girls++;
  queens++;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (board[nx][ny] !== 1) continue;

      board[nx][ny] = 2;
      queue.push([nx, ny]);
      if (girls[nx][ny] === "S") s_girls++;
      queens++;
    }
  }

  if (queens === 7 && 4 <= s_girls) return true;
  return false;
}

function get_seven_girls(arr, index) {
  if (arr.length === SEVEN) {
    if (is_seven_queens(arr)) {
      answer++;
    }

    return;
  }

  for (let i = index; i < girls_index.length; i++) {
    arr.push(girls_index[i]);
    get_seven_girls(arr, i + 1);
    arr.pop();
  }
}
