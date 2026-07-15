function solution(operations) {
    const queue = []
    
    function insert(heap, number, comp) {
        heap.push(number)
        
        let index = heap.length - 1
        while (index) {
            const pIndex = Math.floor((index - 1) / 2)
            if (comp(heap[pIndex], heap[index])) break
            
            [heap[index], heap[pIndex]] = [heap[pIndex], heap[index]]
            index = pIndex
        }
    }
    
    function pop(heap, comp) {
        if (!heap.length) return undefined
        if (heap.length === 1) return heap.pop()
        
        const top = heap[0]
        heap[0] = heap.pop()
        
        let index = 0
        while (true) {
            const l = index * 2 + 1
            const r = index * 2 + 2
            if (heap.length <= l) break
            
            const sIndex = r < heap.length && comp(heap[r], heap[l]) ? r : l
            if (comp(heap[index], heap[sIndex])) break
            [heap[index], heap[sIndex]] = [heap[sIndex], heap[index]]
            index = sIndex
        }
        
        return top
    }
    
    function clean(heap, comp) {
        while(heap.length && count.get(heap[0] ?? 0) === 0) {
            pop(heap, comp)
        }
    }
    
    const minComp = (a, b) => a <= b
    const maxComp = (a, b) => a >= b
    
    const minHeap = []
    const maxHeap = []
    const count = new Map()
    
    for (const operation of operations) {
        const [mode, numStr] = operation.split(' ')
        const number = Number(numStr)
    
        if (mode === 'I') {
            insert(minHeap, number, minComp)
            insert(maxHeap, number, maxComp)
            
            count.set(number, (count.get(number) ?? 0) + 1)
        }
        else if (mode === 'D') {
            if (number === -1) {
                clean(minHeap, minComp)
                
                const removed = pop(minHeap, minComp)
                if (!removed) continue
                
                count.set(removed, count.get(removed) - 1)
            } else {
                clean(maxHeap, maxComp)
                
                const removed = pop(maxHeap, maxComp)
                if (!removed) continue
                
                count.set(removed, count.get(removed) - 1)
            }
        }
        
        clean(minHeap, minComp)
        clean(maxHeap, maxComp)
    }
    
    if (!minHeap.length) return [0, 0]
    
    return [maxHeap[0], minHeap[0]];
}