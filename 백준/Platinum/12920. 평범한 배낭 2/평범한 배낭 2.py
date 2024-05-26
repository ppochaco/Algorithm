import sys
input = sys.stdin.readline

n, m = map(int, input().split())

items = []
for _ in range(n):
    v, c, k = map(int, input().split())
    i = 0
    while k > 0:
        if k < 2**i:
            items.append((k * v, k * c))
            break

        items.append((2**i * v, 2**i * c))
        k -= 2**i
        i += 1

dp = [0] * (m+1)
for v, c in items:
    for weight in range(m, v-1, -1):
        dp[weight] = max(dp[weight], dp[weight - v] + c)

print(dp[-1])