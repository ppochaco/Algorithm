import sys
input = sys.stdin.readline

n, k = map(int, input().split())
arr = list(map(int, input().split()))

num = [0]*(max(arr)+1)
start, end = 0, 0
max_len = 0
while True:
    if start == n:
        break

    if num[arr[start]] >= k:
        num[arr[end]] -= 1
        end += 1
    else:
        num[arr[start]] += 1
        start += 1

    # print(start, end)
    max_len = max(start-end, max_len)

print(max_len)