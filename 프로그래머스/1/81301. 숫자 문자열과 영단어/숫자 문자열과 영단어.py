def solution(s):
    enNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    answer = ''

    while len(s):
        curIndex = s[0]
        
        if curIndex.isdigit():
            s = s[1:]
            answer += curIndex
        else:
            for i, curNum in enumerate(enNumber):
                if s[:5].find(curNum) != -1:
                    s = s[len(curNum):]
                    answer += str(i)
                    break
        
    return int(answer)