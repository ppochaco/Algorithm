def solution(n, stages):    
    stageNum = [0] * (n+2)
    for i in range(1, n+2):
        stageNum[i] = stages.count(i)
    # stageNum = stageNum[1:]
    
    failure = []
    num = sum(stageNum)
    for i in range(1, n+1):
        if num == 0:
            failure.append([0,i])
        else:
            failure.append([(stageNum[i] / num), i])
            num -= stageNum[i]
    
    failure.sort(key = lambda x: (-x[0], x[1]))
    answer = []
    for stage in failure:
        answer.append(stage[1])
    return answer