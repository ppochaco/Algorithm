const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, l] = input[index++].split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}
const rotated_board = rotate_board(board, n);

let answer = 0;
for (let i = 0; i < n; i++) {
  answer += pass_road(board[i], n, l);
  answer += pass_road(rotated_board[i], n, l);
}

console.log(answer);

function rotate_board(arr, n) {
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[i][j] = arr[j][n - 1 - i];
    }
  }

  return rotated;
}

function pass_road(arr, n, l) {
  const visited = Array(n).fill(false);

  for (let i = 0; i < n - 1; i++) {
    if (1 < Math.abs(arr[i] - arr[i + 1])) return 0;

    if (arr[i] - arr[i + 1] === -1) {
      let stack = 0;
      for (let j = i; j >= 0; j--) {
        if (stack === l) break;

        if (!visited[j] && arr[j] === arr[i]) {
          visited[j] = true;
          stack++;
        } else return 0;
      }
      if (stack !== l) return 0;
    } else if (arr[i] - arr[i + 1] === 1) {
      let stack = 0;
      for (let j = i + 1; j < n; j++) {
        if (stack === l) break;

        if (!visited[j] && arr[j] === arr[i] - 1) {
          visited[j] = true;
          stack++;
        } else return 0;
      }
      if (stack !== l) return 0;
    }
  }

  return 1;
}
