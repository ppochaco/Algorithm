const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const [n, m] = input.split(" ").map(Number);

function permutation(index, cur) {
  if (cur.length === m) {
    console.log(cur.join(" "));
    return;
  }

  for (let i = index + 1; i <= n; i++) {
    cur.push(i);
    permutation(i, cur);
    cur.pop();
  }
}

permutation(0, []);
