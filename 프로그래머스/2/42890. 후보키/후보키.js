function solution(relation) {
    const candidate = [];
    const n = relation[0].length;
    for (let i = 1; i <= n; i++) {
        dfs(0, [], i);
    }
    
    return candidate.length;
    
   function dfs(index, arr, r) {
       if (arr.length === r) {
           if (is_unique(arr, relation) && is_minimal(arr, candidate)) {
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
    if (indexList.length === 0) return false;

    const tuples = relation.map(row => 
        indexList.map(i => row[i]).join(',')
    );

    return new Set(tuples).size === relation.length;
}


function is_minimal(arr, candidate) {
    return !candidate.find((cur) => cur.every((num) => arr.includes(num)));
}