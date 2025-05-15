const { reverse } = require("dns");

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);

const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

let answer = 0;

dfs(0, board);

console.log(answer);

function rotate_right(board) {
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[i][j] = board[n - 1 - j][i];
    }
  }

  return rotated;
}

function rotate_left(board) {
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[i][j] = board[j][n - 1 - i];
    }
  }

  return rotated;
}

function move_left(board) {
  const left = [];
  for (let i = 0; i < n; i++) {
    left.push(merge(board[i]));
  }

  return left;
}

function move_right(board) {
  const right = [];
  for (let i = 0; i < n; i++) {
    right.push(merge(board[i].slice().reverse()).reverse());
  }

  return right;
}

function move_down(board) {
  const down = [];
  const rotated_board = rotate_right(board);
  for (let i = 0; i < n; i++) {
    down.push(merge(rotated_board[i]));
  }

  return rotate_left(down);
}

function move_up(board) {
  const up = [];
  const rotated_board = rotate_right(board);
  for (let i = 0; i < n; i++) {
    up.push(merge(rotated_board[i].slice().reverse()).reverse());
  }

  return rotate_left(up);
}

function merge(arr) {
  const queue = arr.filter((v) => v !== 0);
  const merged = [];

  while (queue.length) {
    const a = queue.shift();

    if (queue.length && queue[0] === a) {
      queue.shift();
      merged.push(a * 2);
    } else {
      merged.push(a);
    }
  }

  while (merged.length < n) {
    merged.push(0);
  }

  return merged;
}

function dfs(depth, board) {
  if (depth === 5) {
    let max_block = 0;
    for (let i = 0; i < n; i++) {
      max_block = Math.max(max_block, Math.max(...board[i]));
    }
    answer = Math.max(answer, max_block);
    return;
  }

  for (const move of [move_right, move_left, move_up, move_down]) {
    const next_board = move(board).map((row) => row.slice());
    dfs(depth + 1, next_board);
  }
}
