function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const bridge = []
    
    while(1) {
        let bridge_weights = bridge.reduce((cur, sum) => cur+ sum, 0)
        if (bridge.length === bridge_length) {
            bridge_weights -= bridge[bridge_length -1]
        }
        
        
        if (!truck_weights.length && !bridge_weights.length) {
            answer += 1
            bridge.unshift(0)
            
            if (bridge_length < bridge.length) {
                bridge.pop()
            }
            
            if (!bridge_weights) {
                break
            }
        
            continue
        }
        
        const cur_truck = truck_weights.shift()

        if (cur_truck + bridge_weights <= weight) {
            bridge.unshift(cur_truck)
        } else {
            bridge.unshift(0)
            truck_weights.unshift(cur_truck)
        }

       
        if (bridge_length < bridge.length) {
            bridge.pop()
        }
        
        
        answer ++
    }
    
    return answer;
}