const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const [h, w] = input[0].split(" ").map(Number);
const blocks = input[1].split(" ").map(Number);

let answer = 0;
for (let i = h; i > 0; i--) {
  const block_index = [];
  for (let j = 0; j < w; j++) {
    if (i <= blocks[j]) block_index.push(j);
  }

  for (let j = 1; j < block_index.length; j++) {
    answer += block_index[j] - block_index[j - 1] - 1;
  }
}

console.log(answer);
