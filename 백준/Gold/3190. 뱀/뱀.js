const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

const k = Number(input[index++]);
for (let i = 0; i < k; i++) {
  const [x, y] = input[index++].split(" ").map(Number);
  board[x][y] = "A";
}

const l = Number(input[index++]);
const turns = {};
for (let i = 0; i < l; i++) {
  const [time, direction] = input[index++].split(" ");
  turns[time] = direction;
}

const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]; // 우하좌상
let d = 0; // 우측 방향으로 시작

console.log(move());

function move() {
  let time = 1;
  let x = 1;
  let y = 1;
  const snake = [{ x, y }];
  board[x][y] = "S";

  while (true) {
    const nx = x + direction[d][0];
    const ny = y + direction[d][1];

    if (nx <= 0 || ny <= 0 || nx > n || ny > n) return time;

    if (board[nx][ny] === "S") {
      return time;
    }

    if (board[nx][ny] !== "A") {
      const tail = snake.shift();
      board[tail.x][tail.y] = 0;
    }

    board[nx][ny] = "S";
    snake.push({ x: nx, y: ny });

    for (let [t, dir] of Object.entries(turns)) {
      if (time === Number(t)) {
        if (dir === "L") d = d - 1;
        else d = d + 1;

        if (d < 0) d += 4;
        if (d >= 4) d -= 4;
      }
    }

    time++;
    x = nx;
    y = ny;
  }
}
