const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [r, c, k] = input[index++].split(" ").map(Number);
let arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(input[index++].split(" ").map(Number));
}

let r_size = 3;
let c_size = 3;

let time = 0;
let answer = -1;
while (time <= 100) {
  if (r - 1 <= r_size && c - 1 <= c_size && arr[r - 1][c - 1] === k) {
    answer = time;
    break;
  }

  if (c_size <= r_size) r_calculate();
  else c_calculate();

  time++;
}

console.log(answer);

function r_calculate() {
  for (let i = 0; i < r_size; i++) {
    arr[i] = calculate(arr[i]);
    c_size = Math.max(c_size, arr[i].length);
  }

  for (let i = 0; i < r_size; i++) {
    arr[i] = [...arr[i], ...Array(c_size - arr[i].length).fill(0)];
  }
}

function c_calculate() {
  const swap_arr = swap_rc(arr);

  for (let i = 0; i < c_size; i++) {
    swap_arr[i] = calculate(swap_arr[i]);
    r_size = Math.max(r_size, swap_arr[i].length);
  }

  for (let i = 0; i < c_size; i++) {
    swap_arr[i] = [
      ...swap_arr[i],
      ...Array(r_size - swap_arr[i].length).fill(0),
    ];
  }

  arr = swap_rc(swap_arr);
}

function swap_rc(arr) {
  const swap_arr = Array.from({ length: arr[0].length }, () =>
    Array(arr.length).fill(0)
  );

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      swap_arr[i][j] = arr[j][i];
    }
  }

  return swap_arr;
}

function calculate(arr) {
  const nums = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;

    if (nums.has(arr[i])) {
      nums.set(arr[i], nums.get(arr[i]) + 1);
    } else {
      nums.set(arr[i], 1);
    }
  }

  const sort_nums = [...nums];
  sort_nums.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  const result = [];
  for (let i = 0; i < sort_nums.length; i++) {
    result.push(...sort_nums[i]);
  }

  return result.slice(0, 100);
}
