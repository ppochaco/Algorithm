const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

const n = Number(input[0])
const question = []
for (let i = 1; i < n + 1; i++) {
  question.push(input[i].split(' ').map(Number))
}

const nums = Array.from({ length: 9 }, (_, index) => index + 1)
let answer = 0
for (const a of nums) {
  for (const b of nums) {
    if (a === b) continue

    for (const c of nums) {
      if (c === a || c === b) continue
      
      if (check_question(a, b, c)) answer++
    }
  }
}
console.log(answer)

function check_question(a, b, c) {
  for (const [num, strike, ball] of question) {
    const num_arr = String(num).split('').map(Number)
    if (strike !== get_strike(a, b, c, num_arr)) return false
    if (ball !== get_ball(a, b, c, num_arr)) return false
  }

  return true
}

function get_strike(a, b, c, num) {
  let cnt = 0
  if (a === num[0]) cnt++
  if (b === num[1]) cnt++
  if (c === num[2]) cnt++

  return cnt
}

function get_ball(a, b, c, num) {
  let cnt = 0
  if (a !== num[0] && (a === num[1] || a === num[2])) cnt++
  if (b !== num[1] && (b === num[2] || b === num[0])) cnt++
  if (c !== num[2] && (c === num[0] || c === num[1])) cnt++

  return cnt
}