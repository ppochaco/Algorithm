import sys
input = sys.stdin.readline

n = int(input())
num = list(map(int, input().split()))

def select_three():
    min_sum = sys.maxsize
    min_sum_list = []

    for i in range(n-2):
        left = i + 1
        right = len(num) - 1
        while left < right:
            num_sum = num[i] + num[left] + num[right]

            if abs(num_sum) < min_sum:
                min_sum = abs(num_sum)
                min_sum_list = [num[i], num[left], num[right]]

            if num_sum < 0:
                left += 1
            elif num_sum > 0:
                right -= 1
            else:
                return min_sum_list
            
    return min_sum_list

num.sort()
answer = select_three()
answer.sort()
print(*answer)
