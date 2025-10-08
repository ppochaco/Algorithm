function solution(relation) {
    const candidate = [];
    const n = relation[0].length;
    for (let i = 1; i <= n; i++) {
        dfs(0, [], i);
    }
    const answer = check_minimal(candidate).length;
    
    return answer;
    
   function dfs(index, arr, r) {
       if (arr.length === r) {
           if (is_unique(arr, relation)) {
                candidate.push([...arr]);
            }
           return;
       };
       
       for (let i = index; i < n; i++) {
           arr.push(i);
           dfs(i + 1, arr, r);
           arr.pop();
       }
   }
}

function is_unique(indexList, relation) {
    if (!indexList.length) return false;
    
    const candidate = new Set();
    for (const row of relation) {
        const temp = [];
        for (const index of indexList) {
            temp.push(row[index]);
        }
        candidate.add(temp.join(','));
    }
    
    if (candidate.size === relation.length) return true;
    return false;
}

function check_minimal(arr) {
    const result = [];
    while(arr.length) {
        const target = arr[0];
        result.push(target);
        arr = arr.reduce((acc, cur) => {
            if (!target.every((num) => cur.includes(num))) acc.push(cur);
            return acc;
        }, []);
    }
    
    return result;
}