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

  pop(){
    if (!this.size()) return undefined
    if (this.size() === 1) return this.queue.pop()

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
      if (this.queue[pIndex][0] === this.queue[index][0] && this.queue[pIndex][1] <= this.queue[index][1]) break

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


const [n, k] = input[0].split(' ').map(Number)
const distance =  Math.abs(k - n)
const MAX_N = 100_000

console.log(bfs())

function bfs() {
  const visited = Array.from({ length: distance + 1 }, () => false)
  const queue = new PriorityQueue()
  visited[n] = true
  queue.push([0, n])

  while(queue.size()) {
    const [time, position] = queue.pop()
    
    if (position === k) return time
    if (distance <= time) return distance

    if (0 <= position - 1 && !visited[position - 1]) {
      queue.push([time + 1, position - 1])
      visited[position - 1] = true
    }
    if (position + 1 <= MAX_N && !visited[position + 1]) {
      queue.push([time + 1, position + 1])
      visited[position + 1] = true
    }
    if (position * 2 <= MAX_N && !visited[position * 2]) {
      queue.push([time + 1, position * 2])
      visited[position * 2] = true
    }
  }
}