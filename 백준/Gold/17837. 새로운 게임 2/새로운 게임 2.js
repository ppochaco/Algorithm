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
const horse = Array.from({ length: n }, () => Array(n).fill(null));
const horse_position = Array(k + 1).fill([]);
for (let i = 0; i < k; i++) {
  const [x, y, d] = input[index++].split(" ").map(Number);
  if (horse[x - 1][y - 1]) horse[x - 1][y - 1].push([{ number: i + 1, d }]);
  else horse[x - 1][y - 1] = [{ number: i + 1, d }];

  horse_position[i + 1] = [x - 1, y - 1, d];
}
const MAX_TURN = 1000;
const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];
const reverse_d = { 1: 2, 2: 1, 3: 4, 4: 3 };

let turn = 1;
let i = 1;
while (turn <= MAX_TURN) {
  const [x, y, d] = horse_position[i];
  const horse_cnt = move_horse(x, y, i, d);

  if (4 <= horse_cnt) {
    break;
  }

  i++;
  if (i === k + 1) {
    i = 1;
    turn++;
  }
}

if (MAX_TURN <= turn) console.log(-1);
else console.log(turn);

function move_horse(x, y, number, d) {
  const horses = [];

  while (true) {
    const cur = horse[x][y].pop();
    horses.push(cur);
    if (cur.number === number) {
      break;
    }
  }

  let nx = x + dx[d];
  let ny = y + dy[d];

  if (is_blue()) {
    d = reverse_d[d];
    nx = x + dx[d];
    ny = y + dy[d];
    horses[horses.length - 1] = { number, d };
  }

  if (is_blue()) {
    for (let i = horses.length - 1; i >= 0; i--) {
      horse[x][y].push(horses[i]);
    }

    return horse[x][y].length;
  }

  if (board[nx][ny] === 0) {
    if (horse[nx][ny]) {
      for (let i = horses.length - 1; i >= 0; i--) {
        horse[nx][ny].push(horses[i]);
        horse_position[horses[i].number] = [nx, ny, horses[i].d];
      }
    } else {
      horse[nx][ny] = [];
      for (let i = horses.length - 1; i >= 0; i--) {
        horse[nx][ny].push(horses[i]);
        horse_position[horses[i].number] = [nx, ny, horses[i].d];
      }
    }
  } else if (board[nx][ny] === 1) {
    if (horse[nx][ny]) {
      for (let i = 0; i < horses.length; i++) {
        horse[nx][ny].push(horses[i]);
        horse_position[horses[i].number] = [nx, ny, horses[i].d];
      }
    } else {
      horse[nx][ny] = [];
      for (let i = 0; i < horses.length; i++) {
        horse[nx][ny].push(horses[i]);
        horse_position[horses[i].number] = [nx, ny, horses[i].d];
      }
    }
  }

  return horse[nx][ny].length;

  function is_blue() {
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) return true;

    if (board[nx][ny] === 2) return true;

    return false;
  }
}
