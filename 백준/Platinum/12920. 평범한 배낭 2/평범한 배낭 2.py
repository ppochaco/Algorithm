import sys
input = sys.stdin.readline

n, m = map(int, input().split())

items = []
for _ in range(n):
    v, c, k = map(int, input().split())

    i = 1
    while k > 0:
        cnt = min(i, k)
        items.append((v * cnt, c * cnt))
        k -= i
        i *= 2

dp = [0] * (m+1)
for v, c in items:
    for weight in range(m, v-1, -1):
        dp[weight] = max(dp[weight], dp[weight - v] + c)

print(dp[-1])
