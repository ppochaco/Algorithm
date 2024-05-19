import sys
input = sys.stdin.readline

n = int(input())
player = list(map(int, input().split()))
origin_player = player[:]
player.sort()

max_num = max(player)
nums = [[] for _ in range(max_num+1)]
for cur_player in player:
    cur_num = cur_player*2
    while cur_num <= max_num:
        nums[cur_num].append(cur_player)
        cur_num += cur_player

score = [0] * (max_num+1)
for cur_player in player:
    if not nums[cur_player]:
        continue

    for win in nums[cur_player]:
        score[win] += 1
        score[cur_player] -= 1

for i in origin_player:
    print(score[i], end=' ')
