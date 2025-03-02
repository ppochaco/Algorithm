const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let index = 0;
const t = Number(input[index++]);
for (let i = 0; i < t; i++) {
  const [n, m] = input[index++].split(" ").map(Number);

  index += m;

  console.log(n - 1);
}
