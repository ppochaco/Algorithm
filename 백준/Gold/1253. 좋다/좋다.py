import sys
input = sys.stdin.readline

n = int(input())
nums = list(map(int, input().split()))
nums.sort()

answer = 0
for i, goal in enumerate(nums):
    num_list = nums[:i] + nums[i+1:]
    start = 0
    end = len(num_list) -1
    while start < end:
        two_sum = num_list[start] + num_list[end]
        if two_sum == goal:
            answer += 1
            break
        elif two_sum < goal:
            start += 1
        else:
            end -= 1
print(answer)
