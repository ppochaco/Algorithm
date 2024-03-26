import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(map(int, input().split()))

start = 0
end = 0
arr_sum = arr[0]
answer = 0
while True:
    if arr_sum < m:
        end += 1
        if end == n:
            break
        arr_sum += arr[end]
    elif arr_sum > m:
        arr_sum -= arr[start]
        start += 1
    else:
        answer += 1
        end += 1
        if end == n:
            break
        arr_sum = arr_sum + arr[end] - arr[start]
        start += 1

print(answer)