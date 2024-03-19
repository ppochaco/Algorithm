import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
m = int(input())
s = input().strip()

pn = 0
answer = 0
i = 0
while i < m:
    if s[i:i+3] == 'IOI':
        pn += 1
        if pn == n:
            answer += 1
            pn -= 1
        i += 2
    else:
        i += 1
        pn = 0

print(answer)