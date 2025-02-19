function solution(sizes) {
    const rotated_card = sizes.map(([w, h]) => w < h ? [h, w] : [w, h])
    
    let max_w = 0, max_h = 0
    for (let [w, h] of rotated_card) {
        if (max_w < w) max_w = w
        if (max_h < h) max_h = h
    }
    
    return max_w * max_h
}