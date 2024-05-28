import sys
input = sys.stdin.readline

n = int(input())
nums = list(map(int, input().split()))

up_dp = [0] * n
for i in range(n):
    for j in range(i):
        if nums[j] < nums[i]:
            up_dp[i] = max(up_dp[i], up_dp[j] + 1)

down_dp = [0] * n
for i in range(n-1, -1, -1):
    for j in range(i+1, n):
        if nums[j] < nums[i]:
            down_dp[i] = max(down_dp[i], down_dp[j] + 1)
    up_dp[i] += down_dp[i] + 1

print(max(up_dp))
