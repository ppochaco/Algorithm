import sys
input = sys.stdin.readline

n = int(input())
weight = list(map(int, input().split()))
m = int(input())
marble = list(map(int, input().split()))

max_weight = sum(weight)
dp = [1] + [0]*max_weight

for cur_weight in weight:
    cur_dp = dp[:]
    for cur_num in range(max_weight):
        if dp[cur_num]:
            cur_dp[abs(cur_num - cur_weight)] = 1
            cur_dp[cur_num + cur_weight] = 1
            cur_dp[cur_weight] = 1

    dp = cur_dp[:]

for cur_marble in marble:
    if cur_marble > max_weight:
        print('N', end=' ')
        continue

    if dp[cur_marble]:
        print('Y', end=' ')
    else:
        print('N', end=' ')
