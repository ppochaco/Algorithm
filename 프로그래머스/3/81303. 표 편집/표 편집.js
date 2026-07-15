class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

function solution(n, k, cmd) {
    const list = []
    const stack = []
    let point = null
    
    for (let i = 0; i < n; i++) {
        list.push(new Node(i))
    }

    for (let i = 0; i < n; i++) {
        if (0 < i) {
            list[i].prev = list[i - 1]
        }
        if (i < n - 1) {
            list[i].next = list[i + 1]
        }
    }

    point = list[k]

    cmd.forEach(c => {
        const [command, number] = c.split(' ')
        
        if (command === 'U') {
            for (let i = 0; i < number; i++) {
                point = point.prev
            }
        }
        
        if (command === 'D') {
            for (let i = 0; i < number; i++) {
                point = point.next
            }
        }
        
        if (command === 'C') {
            const node = point
        
            stack.push(node)

            if (node.prev) {
                node.prev.next = node.next
            }
            if (node.next) {
                node.next.prev = node.prev
            }

            if (node.next) {
                point = node.next
            } else {
                point = node.prev
            } 
        }
        
        if (command === 'Z') {
            const node = stack.pop()
            if (node.prev) {
                node.prev.next = node
            }
            if (node.next) {
                node.next.prev = node
            }
        }
    })
    
    const result = new Array(n).fill('O')
        
    for (const node of stack) {
        result[node.data] = 'X'
    }
    
    return result.join('');
}