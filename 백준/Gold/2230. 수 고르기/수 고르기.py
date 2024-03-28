import sys
input = sys.stdin.readline

n, m = map(int, input().split())
nums = list(int(input()) for _ in range(n))
nums.sort()

start = 0
answer = sys.maxsize
for end in range(n):
    gap = nums[end] - nums[start]
    while m < gap:
        answer = min(gap, answer)
        start += 1
        gap = nums[end] - nums[start]
        if start >= end:
            break
    if gap == m:
        answer = m
        break

print(answer)