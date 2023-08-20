import sys
input = sys.stdin.readline

r, c, k = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(3)]

t = 0
R, C = 3, 3
while True:
    if t > 100:
        print(-1)
        break

    if r <= R and c <= C and A[r-1][c-1] == k:
        print(t)
        break

    check = False
    if R < C:
        A = list(map(list, zip(*A)))
        R, C = C, R
        check = True

    size = 0
    for i in range(R):
        dic = {}
        for j in range(C):
            if A[i][j] in dic:
                dic[A[i][j]] += 1
            else:
                dic[A[i][j]] = 1
        if 0 in dic:
            del dic[0]
        dic = sorted(dic.items(), key=lambda x:(x[1],x[0]))
        
        A[i] = []
        for j in dic:
            num, times = j
            A[i].append(num)
            A[i].append(times)
        size = max(len(dic)*2, size)

    for line in A:
        if len(line) < size:
            remain = size - len(line)
            for i in range(remain):
                line.append(0)
        if size < 3:
            remain = 3 - len(line)
            for i in range(remain):
                line.append(0)
    C = size
    if check:
        A = list(map(list, zip(*A)))
        R, C = C, R

    t += 1