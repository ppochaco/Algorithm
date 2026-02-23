const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)

const checked = Array.from({ length: n }, () => false)
let answer = 0
permutation([], 0)
console.log(answer)

function permutation(cur, index) {
  if (cur.length === n) {
    answer = Math.max(get_result(cur), answer)
    return
  }

  for (let i = 0; i < arr.length; i++) {
    if (checked[i]) continue

    cur.push(arr[i])
    checked[i] = true

    permutation(cur, index + 1)
    
    cur.pop()
    checked[i] = false
  }
}

function get_result(arr) {
  let answer = 0
  for (let i = 0; i < arr.length - 1; i++) {
    answer += Math.abs(arr[i] - arr[i + 1])
  }
  
  return answer
}