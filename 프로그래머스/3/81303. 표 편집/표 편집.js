class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class LinkedList {
    constructor(n, k) {
        this.list = []
        this.point = null
        this.stack = []
        this.#init(n, k)
    }
    
    #init(n, k) {
        for (let i = 0; i < n; i++) {
            this.list.push(new Node(i))
        }
        
        for (let i = 0; i < n; i++) {
            if (0 < i) {
                this.list[i].prev = this.list[i - 1]
            }
            if (i < n - 1) {
                this.list[i].next = this.list[i + 1]
            }
        }
        
        this.point = this.list[k]
    }
    
    up(x) {
        for (let i = 0; i < x; i++) {
            this.point = this.point.prev
        }
    }
    
    down(x) {
        for (let i = 0; i < x; i++) {
            this.point = this.point.next
        }
    }
    
    clear() {
        const node = this.point
        
        this.stack.push(node)
        
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        
        if (node.next) {
            this.point = node.next
        } else {
            this.point = node.prev
        } 
    }
    
    restore() {
        if (!this.stack.length) return
        
        const node = this.stack.pop()
        if (node.prev) {
            node.prev.next = node
        }
        if (node.next) {
            node.next.prev = node
        }
    }
    
    getList(n) {
        const result = new Array(n).fill('O')
        
        for (const node of this.stack) {
            result[node.data] = 'X'
        }
        
        return result.join('')
    }
}

function solution(n, k, cmd) {
    const linkedList = new LinkedList(n, k)

    cmd.forEach(c => {
        const [command, number] = c.split(' ')
        if (command === 'U') {
            linkedList.up(number)
        }
        if (command === 'D') {
            linkedList.down(number)
        }
        if (command === 'C') {
            linkedList.clear()
        }
        if (command === 'Z') {
            linkedList.restore()
        }
    })
    
    return linkedList.getList(n);
}