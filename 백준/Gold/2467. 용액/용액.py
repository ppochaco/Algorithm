import sys
input = sys.stdin.readline

n = int(input())
liquid = list(map(int, input().split()))

left = 0
right = n-1
answer = []
min_value = sys.maxsize
while left < right:
    value = liquid[right] + liquid[left]
    if abs(value) < min_value:
        min_value = abs(value)
        answer = [liquid[left], liquid[right]]
    if value > 0:
        right -= 1
    elif value < 0:
        left += 1
    else:
        break

print(*answer)