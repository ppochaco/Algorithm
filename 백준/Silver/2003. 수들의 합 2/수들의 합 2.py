import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(map(int, input().split()))

start = 0
arr_sum = 0
answer = 0
for end in range(n):
    arr_sum += arr[end]
    while arr_sum > m:
        arr_sum -= arr[start]
        start += 1
        if start > end:
            break
    if arr_sum == m:
        answer += 1

print(answer)