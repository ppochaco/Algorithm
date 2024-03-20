import sys
from itertools import combinations
input = sys.stdin.readline

n, s = map(int, input().split())
nums = list(map(int,input().split()))
answer = 0

for i in range(1, n+1):
    for sub in combinations(nums, i):
        if sum(sub) == s:
            answer += 1

print(answer)