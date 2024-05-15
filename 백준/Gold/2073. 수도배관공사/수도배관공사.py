import sys
input = sys.stdin.readline

d, p = map(int, input().split())
pipe = []
for _ in range(p):
    l, c = map(int, input().split())
    pipe.append((l,c))

INF = sys.maxsize
dp = [INF] + [0]*d

for (l, c) in pipe:
    for cur_l in range(d, l-1, -1):
        dp[cur_l] = max(dp[cur_l], min(dp[cur_l-l], c))

print(dp[-1])