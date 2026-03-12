const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const board = []
for (let i = 1; i < n + 1; i++) {
  board.push(input[i].split('').map(Number))
}

const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
console.log(bfs())

function bfs() {
  const visited = Array.from({ length: n } , () => Array.from({ length: m }, () => -1))
  let idx = 0
  const queue = []

  visited[0][0] = 1
  queue.push([0, 0, 1, 1])

  while(idx < queue.length) {
    const [x, y, wall, distance] = queue[idx++]
    
    if (x === n -1 && y === m - 1) {
      return distance
    }

    for (const [dx, dy] of directions) {
      const [nx, ny] = [dx + x, dy + y]
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue
      
      let nextWall = wall
      if (board[nx][ny] === 1) nextWall--
      
      if (nextWall < 0) continue
      if (nextWall <= visited[nx][ny]) continue

      visited[nx][ny] = nextWall
      queue.push([nx, ny, nextWall, distance + 1])
    }
  }

  return -1
}
