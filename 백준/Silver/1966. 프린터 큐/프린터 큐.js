const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

const test_case = Number(input.shift());

for (let i = 0; i < test_case; i++) {
  const [n, m] = input.shift().split(" ").map(Number);

  const docs = input
    .shift()
    .split(" ")
    .map((priority, index) => ({
      priority: Number(priority),
      index,
    }));

  let cnt = 1;
  let max_priority = Math.max(...docs.map((doc) => doc.priority));

  while (true) {
    const { priority, index } = docs.shift();

    if (priority !== max_priority) {
      docs.push({ priority, index });
    } else {
      if (index === m) {
        console.log(cnt);
        break;
      }

      max_priority = Math.max(...docs.map((doc) => doc.priority));
      cnt++;
    }
  }
}
