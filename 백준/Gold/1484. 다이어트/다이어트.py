import sys
input = sys.stdin.readline

g = int(input())

answer = []
start = 1
for end in range(1, 100_001):
    cur_g = end**2 - start**2
    while cur_g > g:
        start += 1
        cur_g = end**2 - start**2
        if start > end:
            break
    if cur_g == g:
        answer.append(end)

if not answer:
    print(-1)
else:
    for i in answer:
        print(i)