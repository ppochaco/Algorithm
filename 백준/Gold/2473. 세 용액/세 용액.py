import sys
input = sys.stdin.readline

n = int(input())
nums = list(map(int, input().split()))
nums.sort()

answer = sys.maxsize
abc = []
for i in range(n-2):
    a = i + 1
    b = n - 1
    while a < b:
        num_sum = nums[a] + nums[b] + nums[i]
        if abs(num_sum) < answer:
            answer = abs(num_sum)
            abc = [nums[a], nums[b], nums[i]]

        if num_sum < 0:
            a += 1
        elif num_sum > 0:
            b -= 1
        else:
            break
        
print(*sorted(abc))
