import sys
input = sys.stdin.readline

a = input().strip()
b = input().strip()

dp = [0]*len(b)
for i in range(len(a)):
    cnt = 0
    for j in range(len(b)):
        if cnt < dp[j]:
            cnt = dp[j]
        elif a[i] == b[j]:
            dp[j] = cnt + 1

print(max(dp))
