const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim().split("");

const stack = [];
const sets = {
  ")": { key: "(", cost: 2 },
  "]": { key: "[", cost: 3 },
};
let inner = 0;
let prev = 0;

for (let i = 0; i < str.length; i++) {
  const c = str[i];
  if (c === "(" || c === "[") {
    stack.push({ pair: c, prev: prev });
    prev = 0;
    inner = 0;
  } else {
    if (!stack.length) {
      {
        console.log(0);
        return;
      }
    }
    const pair = stack.pop();
    if (pair.pair !== sets[c].key) {
      console.log(0);
      return;
    }

    inner = inner ? inner * sets[c].cost : sets[c].cost;
    if (pair.prev) inner += pair.prev;
    prev = inner;
  }

  if (i === str.length - 1) {
     if (stack.length) console.log(0);
    else console.log(prev);
  }
}
