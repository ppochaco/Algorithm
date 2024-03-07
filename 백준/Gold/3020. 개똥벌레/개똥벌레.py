import sys
input = sys.stdin.readline

n, h = map(int, input().split())
down = [0] * (h+1)
up = [0] * (h+1)

for i in range(n//2):
    down[int(input())] += 1
    up[int(input())] += 1
    
for height in range(h-1, 0, -1):
    down[height] += down[height+1]
    up[height] += up[height+1]

answer = [sys.maxsize]
for height in range(1, h+1):
    cur_count = down[height] + up[h - height + 1]
    if cur_count < answer[0]:
        answer = [cur_count]
    elif cur_count == answer[0]:
        answer.append(cur_count)

print(answer[0], len(answer))