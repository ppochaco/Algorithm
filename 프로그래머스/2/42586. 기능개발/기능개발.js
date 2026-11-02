function solution(progresses, speeds) {
    const n = progresses.length
    const work_day = []
    for (let i = 0; i < n; i++) {
        work_day.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    const answer = []
    let start = 0
    for (let end = 1; end < n; end++) {
        if (work_day[start] < work_day[end]) {
            answer.push(end - start)
            start = end
        }
    }
    answer.push(n - start)
    
    return answer
    
}