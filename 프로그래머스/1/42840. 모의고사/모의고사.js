function solution(answers) {
    const su_answers = [ 
        [1, 2, 3, 4, 5], 
        [2, 1, 2, 3, 2, 4, 2, 5], 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    const su_grade = [0, 0, 0]
    
    for (let i = 0; i < answers.length; i++) {
        for(let j = 0; j < 3; j++) {
            if (su_answers[j][i % su_answers[j].length] === answers[i]) {
                su_grade[j] ++
            }
        }
    }
    
    const max_grade = su_grade.reduce((prev, cur) => prev < cur ? cur : prev)
    const answer = []
    for (let i = 0; i < 3; i ++) {        
        if (su_grade[i] === max_grade) {
            answer.push(i + 1)
            
        }
    }

    return answer
}