import sys
input = sys.stdin.readline

n = int(input())
price = list(map(int, input().split()))
m = int(input())

dp = [0] * (m+1)
for num in range(n-1, -1, -1):
    for money in range(price[num], m+1):
        dp[money] = max(dp[money], dp[money-price[num]]*10 + num, num)

print(dp[-1])
