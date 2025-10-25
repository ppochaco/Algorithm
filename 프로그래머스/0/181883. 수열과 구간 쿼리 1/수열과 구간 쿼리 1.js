function solution(arr, queries) {
    const n = arr.length;
    const index = Array.from({ length: n + 1 }, () => 0);
    queries.forEach((query) => {
        const [start, end] = query;
        index[start]++;
        index[end + 1]--;
    })
    
    for (let i = 1; i <= n; i++) {
        index[i] += index[i - 1];
        arr[i - 1] += index[i - 1];
    }
    
    return arr;
}