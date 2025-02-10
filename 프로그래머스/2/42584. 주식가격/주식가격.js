function solution(prices) {
    const answer = Array.from({ length: prices.length }, () => 0)
    const stack = []
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[i] < stack[stack.length - 1].price) {
            const prev = stack.pop()
            answer[prev.index] = i - prev.index
        }
        stack.push({ index: i, price: prices[i] })
    }
    
    for (let cur of stack) {
        answer[cur.index] = prices.length - 1 - cur.index
    }
    
    
    return answer
}