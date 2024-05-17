import sys
input = sys.stdin.readline

n, m, h = map(int, input().split())
dp = [1] + [0]*h
for _ in range(n):
    block = list(map(int, input().split()))
    cur_dp = dp[:]
    for cur_block in block:
        for cur_height in range(h, cur_block-1, -1):
            cur_dp[cur_height] += dp[cur_height - cur_block]
    dp = cur_dp[:]

print(dp[h] % 10007)
