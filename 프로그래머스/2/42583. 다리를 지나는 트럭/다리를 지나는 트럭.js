function solution(bridge_length, weight, truck_weights) {
    let answer = 0
    
    let bridge_weight = 0
    const bridge_queue = []
    const weight_queue = []
    
    do {
        // 1. 다리 위의 트럭 이동하기
        for(let i in bridge_queue) {
            bridge_queue[i] -= 1
        }

        // 2. 도착한 트럭 무게 제외하기
        if(bridge_queue[0] === 0) {
            bridge_weight -= weight_queue.shift()
            bridge_queue.shift()
        }

        // 3. 추가 트럭 가능하면 출발하기
        if (bridge_weight + truck_weights[0] <= weight) {
            weight_queue.push(truck_weights[0])
            bridge_queue.push(bridge_length)
            bridge_weight += truck_weights.shift()
        }
        answer += 1
    } while(bridge_queue.length)
    
    return answer
}