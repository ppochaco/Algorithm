import sys
input = sys.stdin.readline

a = ' ' + input().strip()
b = ' ' + input().strip()

dp = [0]*(len(a))

for i in range(1, len(b)):
    cur_dp = dp[:]
    for j in range(1, len(a)):
        if b[i] == a[j]:
            cur_dp[j] = dp[j-1] + 1
        else:
            cur_dp[j] = max(dp[j], cur_dp[j-1])
    dp = cur_dp[:]

print(dp[-1])
