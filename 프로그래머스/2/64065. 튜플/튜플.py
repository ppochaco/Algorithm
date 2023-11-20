def solution(s):
    s = s[2:len(s)-2].split('},{')
    
    s.sort(key=len)
    maxtuple = s[len(s)-1].split(',')
    
    stuple = []
    for num in s:
        stuple.extend(num.split(','))
    
    answer = [0] * len(maxtuple)
    for i, num in enumerate(maxtuple):
        index = len(maxtuple) - stuple.count(num)
        answer[index] = int(num)
    
    
    

    return answer