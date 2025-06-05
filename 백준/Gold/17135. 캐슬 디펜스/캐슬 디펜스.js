const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m, d] = input[index++].split(" ").map(Number);

let board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}
board.push(Array(m).fill(0));

const dx = [0, -1, 0];
const dy = [-1, 0, 1];

let answer = 0;
combination([], 0);
console.log(answer);

function combination(arrows, index) {
  if (arrows.length === 3) {
    const origin_board = board.map((b) => b.slice());
    answer = Math.max(answer, start(arrows));
    board = origin_board;

    return;
  }

  for (let i = index; i < m; i++) {
    combination([...arrows, i], i + 1);
  }
}

function start(arrows) {
  let result = 0;
  while (true) {
    result = attack(result, arrows);
    if (check_end()) break;
    move_enemy();
    if (check_end()) break;
  }

  return result;
}

function attack(nums, arrows) {
  let died = new Set();
  for (const y of arrows) {
    const enemy = choose_enemy(y);

    if (!enemy) continue;

    died.add(`${enemy[0]} ${enemy[1]}`);
  }

  died = [...died];
  for (let i = 0; i < died.length; i++) {
    const [x, y] = died[i].split(" ");
    board[x][y] = 0;
    nums++;
  }

  return nums;
}

function choose_enemy(y) {
  const queue = [[n, y]];
  const visited = Array.from({ length: n + 1 }, () => Array(m).fill(0));

  while (queue.length) {
    const [x, y] = queue.shift();

    if (board[x][y] === 1) return [x, y];

    for (let i = 0; i < 3; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (visited[nx][ny]) continue;
      if (visited[x][y] + 1 > d) continue;

      queue.push([nx, ny]);
      visited[nx][ny] = visited[x][y] + 1;
    }
  }

  return false;
}

function move_enemy() {
  const moved_board = [Array(m).fill(0), ...board.map((b) => b.slice())];

  moved_board.pop();

  board = moved_board.map((b) => b.slice());
}

function check_end() {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) cnt++;
    }
  }

  if (!cnt) return true;
  else return false;
}
