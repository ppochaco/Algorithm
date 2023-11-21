li = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

def getList(n, maxnum):
    nlist = []
    cur = 0
    while len(nlist) <= maxnum:
        nlist.extend(numtoN(n, cur))
        cur += 1
    return nlist

def numtoN(k, num):
    nlist = []
    while k <= num:
        nlist.append(li[num % k])
        num //= k
    nlist.append(li[num % k])
    nlist = nlist[::-1]
    
    return nlist

def solution(n, t, m, p):
    answer = ''
    gameList = getList(n, t*m)
    for i in range(t):
        turn = i*m
        answer += gameList[turn+(p-1)]
    
    return answer