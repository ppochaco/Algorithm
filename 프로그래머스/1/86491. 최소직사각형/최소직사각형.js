function solution(sizes) {
    let max_w = 0, max_h = 0
    
    for (let [a, b] of sizes) {
        const case1 = Math.max(0, max_w - a) + Math.max(0, max_h - b)
        const case2 = Math.max(0, max_w - b) + Math.max(0, max_h - a)
        
        max_w =  case1 < case2 ? Math.max(max_w, a) : Math.max(max_w, b)
        max_h =  case1 < case2 ? Math.max(max_h, b) : Math.max(max_h, a)
    }
    
    return max_w * max_h
}