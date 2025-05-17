const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
const [x, y, d] = input[index++].split(" ").map(Number);
const room = [];
for (let i = 0; i < n; i++) {
  room.push(input[index++].split(" ").map(Number));
}

let direction = d;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

console.log(move_robot(x, y));

function move_robot(x, y) {
  const queue = [[x, y]];
  let clean_count = 0;

  while (queue.length) {
    const [x, y] = queue.shift();

    if (room[x][y] === 0) {
      room[x][y] = 2;
      clean_count++;
    }

    let isClean = false;
    for (let i = 1; i <= 4; i++) {
      const di = (direction + 4 - i) % 4;
      const nx = x + dx[di];
      const ny = y + dy[di];

      if (room[nx][ny] === 0) {
        queue.push([nx, ny]);
        direction = di;
        isClean = true;
        break;
      }
    }

    if (isClean) continue;

    const nx = x - dx[direction];
    const ny = y - dy[direction];

    if (room[nx][ny] !== 1) {
      queue.push([nx, ny]);
    } else {
      break;
    }
  }

  return clean_count;
}
