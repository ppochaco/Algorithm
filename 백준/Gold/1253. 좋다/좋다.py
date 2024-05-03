import sys
input = sys.stdin.readline

n = int(input())
num = list(map(int, input().split()))

def is_good_num(cur_num, index):
    left = 0
    right = len(num) - 1
    while left < right:
        two_num_sum = num[left] + num[right]
        if two_num_sum < cur_num:
            left += 1
        elif two_num_sum > cur_num:
            right -= 1
        else:
            if left == index:
                left += 1
            elif right == index:
                right -= 1
            else:
                return True
    return False

num.sort()

answer = 0
for i in range(n):
    if is_good_num(num[i], i):
        answer += 1

print(answer)