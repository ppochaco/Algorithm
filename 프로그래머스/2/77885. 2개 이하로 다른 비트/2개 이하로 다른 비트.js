function solution(numbers) {
    const answer = []
    numbers = numbers.map(a => BigInt(a))
    
    for (let number of numbers) {
        for (let i = 1n;; i *= 2n) {
            if (number & i) continue
            
            number += i
            number -= (i >> 1n)
            break
        }
        answer.push(number)
    }
    
    return answer
}