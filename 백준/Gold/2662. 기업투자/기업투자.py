import copy
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
money = [[0]*(m+1)] + list(map(int, input().split()) for _ in range(n))
company = list(map(list, zip(*money)))[1:]

dp = [0] * (n+1)
visited = [[i] for i in range(n+1)]
for i in range(n+1):
    dp[i] = company[0][i]

for i in range(1, m):
    for j in range(n, 0, -1):
        cur_num = 0
        for cur_money in range(1, j+1):
            if dp[j] < dp[j - cur_money] + company[i][cur_money]:
                dp[j] = dp[j - cur_money] + company[i][cur_money]
                visited[j] = copy.deepcopy(visited[j-cur_money])
                cur_num = cur_money
        visited[j].append(cur_num)

print(dp[-1])
print(*visited[-1])
