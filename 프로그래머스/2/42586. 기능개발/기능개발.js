function solution(progresses, speeds) {
    var answer = [];

    let today = 0;
    for (let i = 0, j = 0; i < progresses.length; i ++) {
        const work_day = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        if (today < work_day) {
            today = work_day;
            answer[++j] = 1;
        } else {    
            answer[j] += 1;
        }
    }
    
    answer = answer.filter(day => day > 0);
    
    return answer;
}