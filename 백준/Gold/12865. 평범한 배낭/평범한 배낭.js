const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);
const bag = Array.from({ length: k + 1 }, () => 0);

for (let i = 0; i < n; i++) {
  const [w, v] = input[index++].split(" ").map(Number);
  for (let j = k; j > 0; j--) {
    if (w <= j) {
      bag[j] = Math.max(bag[j], bag[j - w] + v);
    }
  }
}

console.log(bag[k]);
