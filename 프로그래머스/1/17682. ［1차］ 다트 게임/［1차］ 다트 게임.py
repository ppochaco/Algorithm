def solution(dartResult):
    dartResult = dartResult + '0'
    
    # 점수 분리하기
    grades = []
    index = 1
    temp = dartResult[0]
    while len(dartResult) > index:
        if temp == '1' and dartResult[index] == '0':
            temp += dartResult[index]
        elif dartResult[index].isdigit():
            grades.append(temp)
            temp = dartResult[index]
        else:
            temp += dartResult[index]
        index += 1
            
    # 점수 구하기
    answer = 0
    cur = 0
    pre = 0
    for grade in grades:
        num = 0
        offset = 0
        if grade[0:2] == '10':
            num = 10
            offset = 1
        else:
            num = int(grade[0])
            
        bonus = grade[1+offset]
        
        option = ''
        if len(grade) == 3+offset:
            option = grade[2+offset]
            
        if bonus == 'S':
            cur = num
        elif bonus == 'D':
            cur = num**2
        else:
            cur = num**3
        
        if option == '*':
            answer += cur*2 + pre
            cur *= 2
        elif option == '#':
            answer -= cur
            cur = -cur
        else:
            answer += cur
            
        print(answer)
        pre = cur
    
    return answer