function solution(numbers, target) {
    var answer = 0;
    
    function dfs(depth, cur_number) {
        if (depth === numbers.length) {
            if (cur_number === target) {
                answer ++;
            }
            return
        }
        
        dfs(depth + 1, cur_number + numbers[depth])
        dfs(depth + 1, cur_number - numbers[depth])
    }
    
    dfs(0, 0)
    
    return answer;
}