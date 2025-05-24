const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");
let index = 0;
const [n, k] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}
const horse = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => [])
);

const horse_position = Array(k + 1).fill(null);
for (let i = 0; i < k; i++) {
  const [x, y, d] = input[index++].split(" ").map(Number);
  horse[x - 1][y - 1].push(i + 1);
  horse_position[i + 1] = { x: x - 1, y: y - 1, d };
}

const MAX_TURN = 1000;
const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];
const reverse_d = { 1: 2, 2: 1, 3: 4, 4: 3 };

console.log(game());

function game() {
  for (let turn = 1; turn <= 1000; turn++) {
    for (let number = 1; number <= k; number++) {
      move_horse(number, horse_position[number]);
      const { x, y } = horse_position[number];

      if (4 <= horse[x][y].length) {
        return turn;
      }
    }
  }

  return -1;
}

function move_horse(number, { x, y, d }) {
  let nx = x + dx[d];
  let ny = y + dy[d];

  if (is_blue()) {
    d = reverse_d[d];
    nx = x + dx[d];
    ny = y + dy[d];
    horse_position[number].d = d;
  }

  if (is_blue()) {
    return;
  }

  let horse_stack = horse[x][y].splice(horse[x][y].indexOf(number));

  for (let cur_horse of horse_stack) {
    horse_position[cur_horse].x = nx;
    horse_position[cur_horse].y = ny;
  }

  if (board[nx][ny] === 1) {
    horse_stack = horse_stack.reverse();
  }

  horse[nx][ny] = horse[nx][ny].concat(horse_stack);

  function is_blue() {
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) return true;

    if (board[nx][ny] === 2) return true;

    return false;
  }
}
