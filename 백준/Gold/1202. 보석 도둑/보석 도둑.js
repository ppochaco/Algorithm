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
    if (this.size() === 1) return this.queue.pop()

      const top = this.queue[0]
      this.queue[0] = this.queue.pop()
      this.#moveDown()
      
      return top
  }

  #moveUp() {
    let index = this.size() - 1
    const element = this.queue[index]

    while(index) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.queue[parentIndex]

      if (parent <= element) break

      this.queue[index] = parent
      index = parentIndex
    }

    this.queue[index] = element
  }

  #moveDown() {
    let index = 0
    const element = this.queue[index]

    while(true) {
      let left = index * 2 + 1
      let right = index * 2 + 2
      let swap = null

      if (left < this.size()) {
        if (this.queue[left] < element) swap = left
      }

      if (right < this.size()) {
        if ((swap === null && this.queue[right] < element) || (swap !== null && this.queue[right] < this.queue[left])) swap = right
      }

      if (swap === null) break

      this.queue[index] = this.queue[swap]
      index = swap
    }

    this.queue[index] = element
  }
}

const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt').toString().split('\n')

const [n, k] = input[0].split(' ').map(Number)

const jewels = []
for (let i = 1; i < n + 1; i++) {
  jewels.push(input[i].split(' ').map(Number))
}
jewels.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1]
  return a[0] - b[0]
})

const bags = []
for (let i = n + 1; i < n + k + 1; i++) {
  bags.push(Number(input[i]))
}
bags.sort((a, b) => a - b)

let answer = 0
const queue = new PriorityQueue()
let jewel_index = 0
for (const bag_m of bags) {
  while(jewel_index < n) {
    const [m, v] = jewels[jewel_index]
    if (m <= bag_m) {
      queue.push(-v)
      jewel_index++
    } else break
  }

  if (queue.size()) {
    const jewel = -queue.pop()
    answer += jewel
  }
}
console.log(answer)