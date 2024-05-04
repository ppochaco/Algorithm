import sys
input = sys.stdin.readline

n = int(input())
num = list(map(int, input().split()))

def select_two():
    min_sum = sys.maxsize
    num_list = []
    
    left = 0
    right = len(num) - 1
    while left < right:
        num_sum = num[left] + num[right]
        if abs(num_sum) < min_sum:
            min_sum = abs(num_sum)
            num_list = [num[left], num[right]]
        
        if num_sum < 0:
            left += 1
        elif num_sum > 0:
            right -= 1
        else:
            return num_list

    return num_list

num.sort()
print(*select_two())
