import sys
from itertools import combinations
input = sys.stdin.readline

n, m = map(int, input().split())
not_combi = [[] for _ in range(n+1)]

for i in range(m):
    a, b = map(int, input().split())
    if a > b:
        a, b = b, a
    not_combi[a].append(b)

for i in not_combi:
    i.sort()

answer = 0
for i in range(1, n+1):
    for j in range(i+1, n+1):
        if j in not_combi[i]:
            continue
        for k in range(j+1, n+1):
            if k in not_combi[j] or k in not_combi[i]:
                continue
            answer += 1

print(answer)