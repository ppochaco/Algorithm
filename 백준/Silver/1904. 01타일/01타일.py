import sys
input = sys.stdin.readline

n = int(input())
dp = [0, 1, 2]

for i in range(3, n+1):
    dp.append((dp[i-2] + dp[i-1]) % 15746)

print(dp[n])
