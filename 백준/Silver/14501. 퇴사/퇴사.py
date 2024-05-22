import sys
input = sys.stdin.readline

n = int(input())
schedule = [[0,0]] + list(list(map(int, input().split())) for _ in range(n))

dp = [0] * (n+2)
for i in range(n, 0, -1):
    time, price = schedule[i]
    end = time + i - 1
    if n < end:
        dp[i] = dp[i+1]
    else:
        dp[i] = max(dp[i+1], price + dp[end + 1])

print(dp[1])
