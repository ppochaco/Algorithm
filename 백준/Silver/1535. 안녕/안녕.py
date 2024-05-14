import sys
input = sys.stdin.readline

n = int(input())
hp_list = list(map(int, input().split()))
happy_list = list(map(int, input().split()))

dp = [0] * 100
for cur in range(n):
    for hp in range(99, -1, -1):
        if hp >= hp_list[cur]:
            dp[hp] = max(dp[hp], dp[hp - hp_list[cur]] + happy_list[cur])

print(max(dp))