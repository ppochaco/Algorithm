const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

const [r, c, k] = input[0].split(' ').map(Number)
let arr = []
for (let i = 1; i < 4; i++) {
  arr.push(input[i].split(' ').map(Number))
}

const MAX_TIME = 100
let time = 0
for (; time < MAX_TIME + 1; time++) {
  if (r - 1 < arr.length && c - 1 < arr[0].length && arr[r - 1][c - 1] === k) break
  arr = arr.length < arr[0].length ? c_operation(arr) : r_operation(arr)

}

console.log(time <= MAX_TIME ? time : -1)

function r_operation(arr) {
  const result = Array.from({ length: arr.length }, () => [])
  let max_n = 0

  for (let i = 0; i < arr.length; i++) {
    const map = new Map()
    const row = []
    for (let j = 0; j < arr[0].length; j++) {
      const num = arr[i][j]
      if (!num) continue

      map.set(num, (map.get(num) ?? 0) + 1)
    }
    
    for (const [num, cnt] of map) {
      row.push({ num , cnt })
    }

    row.sort((a, b) => {
      if (a.cnt === b.cnt) return a.num - b.num
      return a.cnt - b.cnt
    })

    for (const { num , cnt } of row) {
      result[i].push(num, cnt)
    }

    max_n = Math.max(max_n, row.length * 2)
  }
  
  for (let i = 0; i < arr[0].length; i++) {
    const zero = Array.from({ length: max_n - result[i].length }, () => 0)
    result[i].push(...zero)
  }

  return result.map((row) => [...row])
}

function c_operation(arr) {
  const result = Array.from({ length: arr[0].length }, () => [])
  let max_n = 0

  for (let i = 0; i < arr[0].length; i++) {
    const map = new Map()
    const col = []
    for (let j = 0; j < arr.length; j++) {
      const num = arr[j][i]
      if (!num) continue

      map.set(num, (map.get(num) ?? 0) + 1)
    }
    
    for (const [num, cnt] of map) {
      col.push({ num , cnt })
    }

    col.sort((a, b) => {
      if (a.cnt === b.cnt) return a.num - b.num
      return a.cnt - b.cnt
    })

    for (const { num , cnt } of col) {
      result[i].push(num, cnt)
    }

    max_n = Math.max(max_n, col.length * 2)
  }

  for (let i = 0; i < arr[0].length; i++) {
    const zero = Array.from({ length: max_n - result[i].length }, () => 0)
    result[i].push(...zero)
  }

  return rotate_arr(result).map((row) => [...row])
}

function rotate_arr(arr) {
  const result = Array.from({ length: arr[0].length }, () => Array.from({ length: arr.length }, () => 0))
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      result[j][i] = arr[i][j]
    }
  }

  return result
}