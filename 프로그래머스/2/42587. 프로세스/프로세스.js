function solution(priorities, location) {
    var count = 0;
    
    const queue = []
    for (let i = 0; i < priorities.length; i ++) {
        queue.push({ index: i, priority: priorities[i] })
    }

    while(queue.length) {        
        const cur_q = queue.shift()
        
        if (queue.some((q) => cur_q.priority < q.priority)) {
            queue.push(cur_q)
        } else {
            count += 1
            if (cur_q.index === location) {
                return count
            }
        }
                
    }
    
}