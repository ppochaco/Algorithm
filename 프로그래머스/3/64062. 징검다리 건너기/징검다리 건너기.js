function solution(stones, k) {
    let answer = 0
    let left = 0
    let right = 200_000_000
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        let none = 0
        let max_none = 0
        for (const stone of stones) {
            if (stone <= mid) {
                none++   
            } else {
                max_none = Math.max(max_none, none)
                none = 0
            }
        }
        max_none = Math.max(max_none, none) + 1
        
        if (max_none <= k) {
            left = mid + 1
            answer = mid
        } else {
            right = mid - 1
        }
    }
    
    return answer + 1
}