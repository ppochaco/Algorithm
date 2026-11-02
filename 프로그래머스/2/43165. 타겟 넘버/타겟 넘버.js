function solution(numbers, target) {
    let answer =0
    dfs(0, 0)
    
    function dfs(index, result) {
        if (index === numbers.length) {
            if (result === target) {
                answer++
            }
            return
        }
        
        dfs(index + 1, result + numbers[index])
        dfs(index + 1, result - numbers[index])
    }
    
    return answer
}