from collections import deque

def moveQueue(n, q1, q2):
    count = 1
    q1Sum = sum(q1)
    q2Sum = sum(q2)
    
    for i in range(n+3):
        if q1Sum == q2Sum:
            return count
            break
        if q1Sum < q2Sum:
            q1.append(q2[0])
            q1Sum += q2[0]
            q2Sum -= q2[0]
            q2.popleft()
        elif q2Sum < q1Sum:
            q2.append(q1[0])
            q2Sum += q1[0]
            q1Sum -= q1[0]
            q1.popleft()

        count += 1
    
    return -1

def solution(queue1, queue2):  
    q1 = deque(queue1)
    q2 = deque(queue2)
    
    q1Sum = sum(q1)
    q2Sum = sum(q2)
    
    if max(max(q1), max(q2)) * 2 > q1Sum + q2Sum:
        return -1
    if (q1Sum + q2Sum) % 2:
        return -1
    
    if q1Sum == q2Sum:
        return 0
    
    n = len(queue1) * 4
    
    # 경우1
    qq1 = deque(queue1)
    qq2 = deque(queue2)
    qq1.append(qq2[0])
    qq2.popleft()
    first = moveQueue(n, qq1, qq2)
    
    # 경우2
    qq1 = deque(queue1)
    qq2 = deque(queue2)
    qq2.append(qq1[0])
    qq1.popleft()
    second = moveQueue(n, qq1, qq2)
    
    answer = min(first, second)
    
    return answer