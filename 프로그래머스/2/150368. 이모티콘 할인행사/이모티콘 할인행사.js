function solution(users, emoticons) {
    const answer = [];
    
    const prices = []
    combi(prices, 0, []);
    console.log(prices);
    
    
    return answer;
    
    function combi(result, depth, arr) {
        if (depth === emoticons.length) {
            result.push([...arr]);
            return;
        }
        
        for (sale of [10, 20, 30, 40]) {
            combi(result, depth + 1, [...arr, sale]);
        }
    }
}

