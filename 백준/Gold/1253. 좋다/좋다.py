import sys
input = sys.stdin.readline

n = int(input())
num = list(map(int, input().split()))

def is_good_num(cur_num):
    num_list = num[:]
    num_list.pop(num_list.index(cur_num))
    left = 0
    right = len(num_list) - 1
    while left < right:
        two_num_sum = num_list[left] + num_list[right]

        if two_num_sum < cur_num:
            left += 1
        elif two_num_sum > cur_num:
            right -= 1
        else:
            return True
    return False

num.sort()

answer = 0
for i in range(n):
    if is_good_num(num[i]):
        answer += 1

print(answer)