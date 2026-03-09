const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

class PriorityQueue {
  constructor() {
    this.queue = []
  }

  size() {
    return this.queue.length
  }

  push(value) {
    this.queue.push(value)
    this.#moveUp()
  }

  pop() {
    if (!this.size()) return undefined

    const top = this.queue[0]
    this.queue[0] = this.queue.pop()
    this.#moveDown()

    return top
  }

  #swap(a, b) {
    [this.queue[a], this.queue[b]] = [this.queue[b], this.queue[a]]
  }

  #moveUp() {
    let index = this.size() - 1

    while(index) {
      const pIndex = Math.floor((index - 1) / 2)

      if (this.queue[pIndex][0] < this.queue[index][0]) break

      this.#swap(index, pIndex)
      index = pIndex
    }
  }

  #moveDown() {
    let index = 0

    while(true) {
      const left = index * 2 + 1
      const right = index * 2 + 2

      if (this.size() <= left) break

      const sIndex = right < this.size() && this.queue[right][0] < this.queue[left][0] ? right : left

      if (this.queue[index][0] <= this.queue[sIndex][0]) break

      this.#swap(index, sIndex)
      index = sIndex
    }
  }
}

const [n, m] = input[0].split(' ').map(Number)
const board = []
for (let i = 1; i < n + 1; i++) {
  board.push(input[i].split('').map(Number))
}

console.log(bfs(0, 0))

function bfs(startX, startY) {
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => 0))
  const queue = new PriorityQueue()
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  visited[startX][startY] = 1
  queue.push([1, startX, startY])

  while(queue.size()) {
    const [cnt, x, y] = queue.pop()

    if (x === n - 1 && y === m - 1) return cnt
    
    for (const [dx, dy] of directions) {
      const nx = dx + x
      const ny = dy + y

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue
      if (visited[nx][ny]) continue
      if (!board[nx][ny]) continue

      visited[nx][ny] = cnt + 1
      queue.push([visited[nx][ny], nx, ny])
    }
  }
}