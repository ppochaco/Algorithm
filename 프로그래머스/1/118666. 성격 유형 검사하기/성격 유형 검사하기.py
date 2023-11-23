def solution(survey, choices):
    answer = ''
    types = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']]
    grades = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0}
    
    n = len(survey)
    for i in range(n):
        t, c = survey[i], choices[i]
        if c > 4:
            t, c = t[1], c-4
        elif c < 4:
            t, c = t[0], 4-c
        else:
            t, c = '', 0
        
        if t:
            grades[t] += c
        
    for i in range(4):
        t1, t2 = types[i]
        s1, s2 = grades[t1], grades[t2]
        
        if s1 < s2:
            answer += t2
        else:
            answer += t1

    return answer