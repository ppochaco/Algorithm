import sys
input = sys.stdin.readline

n, k = map(int, input().split())
stuff = []
for _ in range(n):
    w, v = map(int, input().split())
    stuff.append((w, v))
stuff.sort(key=lambda x:x[0])

dp = [0]*(k+1)
for cur_weight, cur_value in stuff:
    for weight in range(k, 0, -1):
        if cur_weight <= weight:
            dp[weight] = max(dp[weight], dp[weight - cur_weight] + cur_value)

print(max(dp))