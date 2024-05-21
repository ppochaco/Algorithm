import sys
input = sys.stdin.readline

n = int(input())

dp = [0]*(n+1)
for i in range(1, n+1):
    nums = list(map(int, input().split()))

    cur_dp = dp[:]
    for j in range(i):
        cur_dp[j] = max(dp[j] + nums[j], dp[j-1] + nums[j])
    dp = cur_dp[:]

print(max(dp))
