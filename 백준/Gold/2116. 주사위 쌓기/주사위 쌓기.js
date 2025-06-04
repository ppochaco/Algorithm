const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const dice = [];
const dice_index_pair = {
  0: 5,
  1: 3,
  2: 4,
  3: 1,
  4: 2,
  5: 0,
};

for (let i = 0; i < n; i++) {
  dice.push(input[index++].split(" ").map((num) => Number(num)));
}

let answer = 0;
for (let floor = 1; floor <= 6; floor++) {
  let cur_floor = floor;
  let result = 0;
  for (let i = 0; i < n; i++) {
    [cur_floor, result] = rotate_dice(i, cur_floor, result);
  }

  answer = Math.max(answer, result);
}

console.log(answer);

function rotate_dice(dice_index, floor, result) {
  const cur_dice = dice[dice_index];
  const floor_index = cur_dice.findIndex((d) => d === floor);
  const ceil_index = dice_index_pair[floor_index];

  let max_num = 0;
  for (let i = 0; i < 6; i++) {
    if (i === floor_index || i === ceil_index) {
      continue;
    }
    max_num = Math.max(max_num, cur_dice[i]);
  }

  result += max_num;

  return [cur_dice[ceil_index], result];
}
