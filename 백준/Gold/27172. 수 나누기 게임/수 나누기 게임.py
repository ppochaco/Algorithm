import sys
input = sys.stdin.readline

n = int(input())
player = list(map(int, input().split()))

max_num = max(player)
nums = {cur_player: 0 for cur_player in player}

for cur_player in player:
    for cur_num in range(cur_player*2, max_num+1, cur_player):
        if cur_num in nums:
            nums[cur_player] += 1
            nums[cur_num] -= 1

for cur_player in player:
    print(nums[cur_player], end=' ')
