import sys
input = sys.stdin.readline

n, s = map(int, input().split())
nums = list(map(int, input().split()))

left = 0
right = 0
sum_nums = nums[0]
answer = sys.maxsize
while left <= right:
    if sum_nums < s:
        right += 1
        if right == n:
            break
        sum_nums += nums[right]
    else:
        answer = min(answer, right - left + 1)
        sum_nums -= nums[left]
        left += 1

if answer == sys.maxsize:
    print(0)
else:
    print(answer)