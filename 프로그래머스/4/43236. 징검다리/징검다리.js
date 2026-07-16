function solution(distance, rocks, n) {
    rocks.push(distance)
    rocks.sort((a, b) => a - b)
    
    let left = 1
    let right = distance
    let answer = 0
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let cnt = 0
        let prev = 0
        for (const rock of rocks) {
            const diff = rock - prev
            if (diff < mid) {
                cnt++
            } else {
                prev = rock
            }
        }
    
        if (n < cnt) {
            right = mid - 1
        } else {
            answer = mid
            left = mid + 1
        }
    }
    
    return answer;
}