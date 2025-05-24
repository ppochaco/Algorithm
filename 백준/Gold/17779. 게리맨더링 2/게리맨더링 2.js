const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input[index++].split(" ").map(Number));
}

let answer = Infinity;

for (let x = 0; x < n - 1; x++) {
  for (let y = 0; y < n - 2; y++) {
    for (let d1 = 1; d1 <= y; d1++) {
      for (let d2 = 1; d2 + x <= n - 1; d2++) {
        if (n <= x + d1 + d2) continue;
        const area = split_area(x, y, d1, d2);
        answer = Math.min(answer, get_people_diff(area));
      }
    }
  }
}
console.log(answer);

function get_people_diff(area) {
  const people = Array(6).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      people[area[i][j]] += board[i][j];
    }
  }

  const max_people = Math.max(...people);
  const min_people = Math.min(...people.slice(1));

  return max_people - min_people;
}

function split_area(x, y, d1, d2) {
  const area = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i <= d1; i++) {
    area[x + i][y - i] = 5;
    area[x + d2 + i][y + d2 - i] = 5;
  }
  for (let i = 0; i <= d2; i++) {
    area[x + i][y + i] = 5;
    area[x + d1 + i][y - d1 + i] = 5;
  }

  for (let i = x + 1; i < x + d1 + d2; i++) {
    const start = area[i].indexOf(5);
    const end = area[i].indexOf(5, start + 1);
    for (let j = start; j <= end; j++) {
      area[i][j] = 5;
    }
  }

  for (let i = 0; i < x + d1; i++) {
    for (let j = 0; j <= y; j++) {
      if (area[i][j] === 5) break;
      area[i][j] = 1;
    }
  }

  for (let i = 0; i <= x + d2; i++) {
    for (let j = y + 1; j < n; j++) {
      if (area[i][j] === 5) continue;
      area[i][j] = 2;
    }
  }

  for (let i = x + d1; i < n; i++) {
    for (let j = 0; j < y - d1 + d2; j++) {
      if (area[i][j] === 5) break;
      area[i][j] = 3;
    }
  }

  for (let i = x + d2 + 1; i < n; i++) {
    for (let j = y - d1 + d2; j < n; j++) {
      if (area[i][j] === 5) continue;
      area[i][j] = 4;
    }
  }

  return area;
}
