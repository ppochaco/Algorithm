import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

n = int(input())

dp = [0, 1, 2] + [0]*1000
for i in range(3, 1001):
    dp[i] = (dp[i-1] + dp[i-2]) % 10007

print(dp[n])