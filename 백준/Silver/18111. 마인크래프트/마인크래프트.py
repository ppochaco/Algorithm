import sys
input = sys.stdin.readline

n, m, b = map(int, input().split())
land = []
for _ in range(n):
    land.extend(map(int, input().split()))

answer_time = sys.maxsize
answer_height = 0
for cur_height in range(257):
    block = 0
    time = 0
    inventory = b
    
    for i in land:
            if i <= cur_height:
                time += (cur_height - i) * 1
                inventory -= cur_height - i
            else:
                time += (i - cur_height) * 2
                inventory += i - cur_height
            
    if inventory < 0:
        continue
    
    if time <= answer_time:
        answer_time = time
        answer_height = cur_height
    
print(answer_time, answer_height)