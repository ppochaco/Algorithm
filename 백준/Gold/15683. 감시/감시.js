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

const cctv = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (0 < board[i][j] && board[i][j] < 6) {
      cctv.push({ type: board[i][j], x: i, y: j });
    }
  }
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const direction = [
  [],
  [[0], [1], [2], [3]],
  [
    [0, 2],
    [1, 3],
  ],

  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  [
    [0, 1, 2],
    [0, 1, 3],
    [0, 2, 3],
    [1, 2, 3],
  ],
  [[0, 1, 2, 3]],
];

let answer = Infinity;
dfs([], 0);

console.log(answer);

function move(board, d, x, y) {
  while (true) {
    const nx = x + dx[d];
    const ny = y + dy[d];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) break;
    if (board[nx][ny] === 6) break;

    if (board[nx][ny] === 0) {
      board[nx][ny] = -1;
    }

    x = nx;
    y = ny;
  }
}

function monitor_cctv(board, cctvs) {
  for (let i = 0; i < cctvs.length; i++) {
    for (let j = 0; j < cctvs[i].d.length; j++) {
      move(board, cctvs[i].d[j], cctvs[i].x, cctvs[i].y);
    }
  }

  return board;
}

function count_area(board) {
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) cnt++;
    }
  }

  return cnt;
}

function dfs(arr, index) {
  if (arr.length === cctv.length) {
    const copy_board = board.map((b) => b.slice());
    const result_board = monitor_cctv(copy_board, arr);
    answer = Math.min(answer, count_area(result_board));
    return;
  }

  const cur_cctv = cctv[index].type;
  for (let i = 0; i < direction[cur_cctv].length; i++) {
    arr.push({ d: direction[cur_cctv][i], x: cctv[index].x, y: cctv[index].y });
    dfs(arr, index + 1);
    arr.pop();
  }
}
