import sys
input = sys.stdin.readline

n = int(input())
schedule = list(list(map(int, input().split())) for _ in range(n))

dp = [0] * (n+1)
for i in range(n-1, -1, -1):
    time, price = schedule[i]
    end = time + i
    if n < end:
        dp[i] = dp[i+1]
    else:
        dp[i] = max(dp[i+1], price + dp[end])

print(dp[0])
