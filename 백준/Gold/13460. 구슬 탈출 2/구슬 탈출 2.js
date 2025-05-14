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
  board.push(input[index++].split(""));
}

let red;
let blue;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === "R") {
      red = { x: i, y: j };
    } else if (board[i][j] === "B") {
      blue = { x: i, y: j };
    }
  }
}
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

console.log(bfs());

function bfs() {
  const visited = new Set();
  const queue = [[red, blue, 0]];
  visited.add(`${red.x},${red.y},${blue.x},${blue.y}`);

  while (queue.length) {
    const [cur_red, cur_blue, move] = queue.shift();

    if (10 < move) {
      return -1;
    }

    if (board[cur_red.x][cur_red.y] === "O") {
      return move;
    }

    red = cur_red;
    blue = cur_blue;

    for (let i = 0; i < 4; i++) {
      let next_red = move_ball(i, cur_red.x, cur_red.y);
      let next_blue = move_ball(i, cur_blue.x, cur_blue.y);

      if (board[next_blue.x][next_blue.y] === "O") continue;

      if (next_red.x === next_blue.x && next_red.y === next_blue.y) {
        [next_red, next_blue] = adjust_balls(i, next_red.x, next_red.y);
      }

      const key = `${next_red.x},${next_red.y},${next_blue.x},${next_blue.y}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([next_red, next_blue, move + 1]);
      }
    }
  }

  return -1;
}

function adjust_balls(direction, x, y) {
  if (direction === 0) {
    if (red.y < blue.y) {
      return [
        { x, y },
        { x, y: y + 1 },
      ];
    } else {
      return [
        { x, y: y + 1 },
        { x, y },
      ];
    }
  } else if (direction === 1) {
    if (red.y > blue.y) {
      return [
        { x, y },
        { x, y: y - 1 },
      ];
    } else {
      return [
        { x, y: y - 1 },
        { x, y },
      ];
    }
  } else if (direction === 2) {
    if (red.x < blue.x) {
      return [
        { x, y },
        { x: x + 1, y },
      ];
    } else {
      return [
        { x: x + 1, y },
        { x, y },
      ];
    }
  } else if (direction === 3) {
    if (red.x > blue.x) {
      return [
        { x, y },
        { x: x - 1, y },
      ];
    } else {
      return [
        { x: x - 1, y },
        { x, y },
      ];
    }
  }
}

function move_ball(d, x, y) {
  while (true) {
    if (board[x + dx[d]][y + dy[d]] === "#") break;
    if (board[x][y] === "O") break;

    x += dx[d];
    y += dy[d];
  }

  return { x, y };
}
