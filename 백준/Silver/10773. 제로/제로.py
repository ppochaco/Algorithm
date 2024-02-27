import sys
input = sys.stdin.readline

k = int(input())
nums = []
for _ in range(k):
    cur_num = int(input())
    if cur_num == 0:
        nums.pop()
    else:
        nums.append(cur_num)

print(sum(nums))