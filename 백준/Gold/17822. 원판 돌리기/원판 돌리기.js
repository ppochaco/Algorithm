const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m, t] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

for (let i = 0; i < t; i++) {
  const [x, d, k] = input[index++].split(" ").map(Number);
  for (let j = 1; j * x - 1 < n; j++) {
    board[j * x - 1] = rotate_board(j * x - 1, d, k);
  }

  const same_numbers = find_same_numbers();
  if (same_numbers.length) {
    remove_same_number(same_numbers);
  } else {
    make_average();
  }
}

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answer += board[i][j];
  }
}

console.log(answer);

function rotate_board(x, d, k) {
  const cur_board = board[x].slice();

  let result = [];
  k = k % m;

  if (d === 0) {
    const a = cur_board.slice(m - k, m);
    const b = cur_board.slice(0, m - k);
    result = a.concat(b);
  } else if (d === 1) {
    const a = cur_board.slice(0, k);
    const b = cur_board.slice(k, m);
    result = b.concat(a);
  }

  return result;
}

function find_same_numbers() {
  const candidates = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!board[i][j]) continue;

      if (board[i][j] === board[i][(j + 1) % m]) {
        candidates.add([i, j]);
        candidates.add([i, (j + 1) % m]);
      }

      if (i + 1 < n && board[i][j] === board[i + 1][j]) {
        candidates.add([i, j]);
        candidates.add([i + 1, j]);
      }
    }
  }

  return [...candidates];
}

function remove_same_number(numbers) {
  for (let [i, j] of numbers) {
    board[i][j] = 0;
  }
}

function make_average() {
  let sum = 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j]) {
        sum += board[i][j];
        cnt++;
      }
    }
  }

  const average = sum / cnt;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!board[i][j]) continue;

      if (board[i][j] < average) {
        board[i][j]++;
      } else if (board[i][j] > average) {
        board[i][j]--;
      }
    }
  }
}
