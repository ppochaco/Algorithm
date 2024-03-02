import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    method = [0, 1 ,2, 4]
    for i in range(4, n+1):
        method.append(sum(method[i-3:i]))
    print(method[n])
