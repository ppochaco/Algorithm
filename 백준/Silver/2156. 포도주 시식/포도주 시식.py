import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

n = int(input())
wine = [int(input()) for _ in range(n)]

w = [0]*n
w[0] = wine[0]

if len(wine) == 1:
    print(w[0])
    exit()

w[1] = wine[0] + wine[1]
for i in range(2, n):
    w[i] = max(w[i-1], wine[i]+wine[i-1]+w[i-3], wine[i]+w[i-2])

print(w[-1])