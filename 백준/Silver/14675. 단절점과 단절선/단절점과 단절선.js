const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const n = Number(input[index++]);
const line = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < n - 1; i++) {
  const [a, b] = input[index++].split(" ").map(Number);
  line[a].push(b);
  line[b].push(a);
}

const q = Number(input[index++]);
for (let i = 0; i < q; i++) {
  const [t, k] = input[index++].split(" ").map(Number);
  let answer = "yes";

  if (t === 1) {
    answer = line[k].length === 1 ? "no" : "yes";
  }

  console.log(answer);
}
