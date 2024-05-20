import sys
input = sys.stdin.readline

n, m = map(int, input().split())
money = [[0]*(m+1)] + list(list(map(int, input().split())) for _ in range(n))

dp = [0] * (n+1)
visited = [[0]*(n+1) for _ in range(m+1)]

for i in range(1, m+1):
    for j in range(n, 0, -1):
        for cur_money in range(1, j+1):
            if dp[j] < dp[j - cur_money] + money[cur_money][i]:
                dp[j] = dp[j - cur_money] + money[cur_money][i]
                visited[i][j] = cur_money

cur = visited[m][n]
answer = [cur]
for i in range(m-1, 0, -1):
    answer.append(visited[i][n-cur])
    cur += visited[i][n-cur]

print(dp[-1])
print(*answer[::-1])
