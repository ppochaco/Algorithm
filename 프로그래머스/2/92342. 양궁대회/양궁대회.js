function solution(n, info) {
    let answer = [-1];
    let max_score = 0;
    const ryan_info = Array(11).fill(0);
    
    dfs(0, n);
    
    return answer;
  
    function dfs(idx, remain) {
        if (10 < idx) {
            ryan_info[10] += remain;
            
            const score = get_score(info, ryan_info);
            if (score && max_score < score) {
                max_score = score;
                answer = [...ryan_info];
            } else if (score && max_score === score) {
                if (has_low_scores(answer, ryan_info)) {
                    answer = [...ryan_info];
                }
            }

            ryan_info[10] -= remain;
            return;
        }

        if (info[idx] < remain) {
            ryan_info[idx] = info[idx] + 1;
            dfs(idx + 1, remain - (info[idx] + 1));
            ryan_info[idx] = 0;
        }

        dfs(idx + 1, remain);
    }
}

function get_score(apeach, ryan) {
    let apeachScore = 0, ryanScore = 0;
    
    for (let i = 0; i <= 10; i++) {
        if (apeach[i] === 0 && ryan[i] === 0) continue;
        
        if (apeach[i] >= ryan[i]) apeachScore += 10 - i;
        else ryanScore += 10 - i;
    }
    
    return ryanScore < apeachScore ? 0 : ryanScore - apeachScore;
}

function has_low_scores(arr1, arr2) {
    for (let i = 10; i >= 0; i--) {
        if (arr1[i] < arr2[i]) {
          return true;
        } else if (arr2[i] < arr1[i]) return false;
    }
    
    return false;
}
