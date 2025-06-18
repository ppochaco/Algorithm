const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, M, k] = input[index++].split(" ").map(Number);

let board = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => [])
);
for (let i = 0; i < M; i++) {
  const [x, y, m, s, d] = input[index++].split(" ").map(Number);
  board[x - 1][y - 1].push([m, s, d]);
}

const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

const MAX_S = (Math.floor(1000 / n) + 1) * n;

for (let t = 0; t < k; t++) {
  const moved_board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => [])
  );

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      for (let k = 0; k < board[x][y].length; k++) {
        const [m, s, d] = board[x][y][k];
        const nx = (x + dx[d] * s + MAX_S) % n;
        const ny = (y + dy[d] * s + MAX_S) % n;

        moved_board[nx][ny].push([m, s, d]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (2 <= moved_board[i][j].length) {
        let [nm, ns, all_even, all_odd] = [0, 0, true, true];
        for (let k = 0; k < moved_board[i][j].length; k++) {
          nm += moved_board[i][j][k][0];
          ns += moved_board[i][j][k][1];
          moved_board[i][j][k][2] % 2 ? (all_odd = false) : (all_even = false);
        }
        nm = Math.floor(nm / 5);
        ns = Math.floor(ns / moved_board[i][j].length);

        moved_board[i][j] = [];
        let d = [];
        if (nm === 0) continue;

        d = all_even || all_odd ? [0, 2, 4, 6] : [1, 3, 5, 7];

        for (let k = 0; k < 4; k++) {
          moved_board[i][j].push([nm, ns, d[k]]);
        }
      }
    }
  }

  board = moved_board.map((a) => a.map((b) => b.slice()).slice());
}

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < board[i][j].length; k++) {
      answer += board[i][j][k][0];
    }
  }
}

console.log(answer);
