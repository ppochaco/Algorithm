const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m, xx, yy, k] = input[index++].split(" ").map(Number);

const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

const commands = input[index++].split(" ").map(Number);
let dice = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let x = xx;
let y = yy;

const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];

const moves = [0, move_right, move_left, move_up, move_down];

const answer = [];

for (let i = 0; i < k; i++) {
  const cur_d = commands[i];
  const nx = x + dx[cur_d];
  const ny = y + dy[cur_d];

  if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

  const moved_dice = moves[cur_d](dice);

  if (board[nx][ny] === 0) {
    board[nx][ny] = moved_dice[3][1];
  } else {
    moved_dice[3][1] = board[nx][ny];
    board[nx][ny] = 0;
  }

  answer.push(moved_dice[1][1]);
  dice = moved_dice.map((d) => d.slice());
  x = nx;
  y = ny;
}

console.log(answer.join("\n"));

function move_right(dice) {
  const moved_dice = dice.map((d) => d.slice());

  moved_dice[1][0] = dice[3][1];
  moved_dice[1][1] = dice[1][0];
  moved_dice[1][2] = dice[1][1];
  moved_dice[3][1] = dice[1][2];

  return moved_dice;
}

function move_left(dice) {
  const moved_dice = dice.map((d) => d.slice());

  moved_dice[1][0] = dice[1][1];
  moved_dice[1][1] = dice[1][2];
  moved_dice[1][2] = dice[3][1];
  moved_dice[3][1] = dice[1][0];

  return moved_dice;
}

function move_up(dice) {
  const moved_dice = dice.map((d) => d.slice());

  moved_dice[0][1] = dice[1][1];
  moved_dice[1][1] = dice[2][1];
  moved_dice[2][1] = dice[3][1];
  moved_dice[3][1] = dice[0][1];

  return moved_dice;
}

function move_down(dice) {
  const moved_dice = dice.map((d) => d.slice());

  moved_dice[0][1] = dice[3][1];
  moved_dice[1][1] = dice[0][1];
  moved_dice[2][1] = dice[1][1];
  moved_dice[3][1] = dice[2][1];

  return moved_dice;
}
