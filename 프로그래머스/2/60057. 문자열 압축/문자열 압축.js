function solution(s) {
    let answer = Infinity;
    let num = 1;
    while(num <= Math.ceil(s.length / 2)) {
        let pre = '';
        let cnt = 1;
        let result = '';
        for (let i = 0; i < Math.ceil(s.length / num); i++) {
            const word = s.slice(i * num, (i + 1) * num);
            if (pre === word) cnt++;
            else {
                result += cnt === 1 ? pre : String(cnt) + pre;
                pre = word;
                cnt = 1;
            }
        }
        result += cnt === 1 ? pre : String(cnt) + pre;
        answer = Math.min(answer, result.length);
        num++;
    }
    
    return answer;
}