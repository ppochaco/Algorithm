function solution(prices) {
    var answer = [];
    
    for (let i = 0; i < prices.length; i++) {
        let down_time = prices.length - 1
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] < prices[i]) {
                down_time = j
                break
            }
        }
        
        answer.push(down_time - i)
    }
    
    return answer;
}