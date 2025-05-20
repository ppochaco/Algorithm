const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .split("\n");

let index = 0;
const wheels = [];
for (let i = 0; i < 4; i++) {
  wheels.push(input[index++].split("").map(Number));
}

const k = Number(input[index++]);

for (let i = 0; i < k; i++) {
  const [n, d] = input[index++].split(" ").map(Number);
  const cur = n - 1;
  const cur_wheels = wheels.map((w) => w.slice());

  for (let j = cur; j > 0; j--) {
    if (cur_wheels[j][6] !== cur_wheels[j - 1][2]) {
      if ((cur - j) % 2 === 0) {
        wheels[j - 1] = rotate_wheel(wheels[j - 1], -d);
      } else {
        wheels[j - 1] = rotate_wheel(wheels[j - 1], d);
      }
    } else break;
  }

  for (let j = cur; j < 3; j++) {
    if (cur_wheels[j][2] !== cur_wheels[j + 1][6]) {
      if ((j - cur) % 2 === 0) {
        wheels[j + 1] = rotate_wheel(wheels[j + 1], -d);
      } else {
        wheels[j + 1] = rotate_wheel(wheels[j + 1], d);
      }
    } else break;
  }

  wheels[cur] = rotate_wheel(wheels[cur], d);
}

let answer = 0;
for (let i = 0; i < 4; i++) {
  if (wheels[i][0]) {
    answer += 2 ** i;
  }
}

console.log(answer);

function rotate_wheel(wheel, direction) {
  const rotated = [];
  if (direction === 1) {
    rotated.push(wheel[wheel.length - 1]);
    for (let i = 0; i < wheel.length - 1; i++) {
      rotated.push(wheel[i]);
    }
  } else if (direction === -1) {
    for (let i = 1; i < wheel.length; i++) {
      rotated.push(wheel[i]);
    }
    rotated.push(wheel[0]);
  }

  return rotated;
}
