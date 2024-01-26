import sys
from collections import Counter, deque
input = sys.stdin.readline

n, k = map(int, input().split())
arr = list(map(int, input().split()))

count = [0]*(max(arr)+1)
max_len = 0
end = 0

for start, num in enumerate(arr):
    count[num] += 1

    while count[num] > k:
        count[arr[end]] -= 1
        end += 1
    
    max_len = max(max_len, start-end+1)

print(max_len)