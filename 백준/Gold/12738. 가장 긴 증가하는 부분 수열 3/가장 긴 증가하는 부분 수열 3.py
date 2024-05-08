import sys
input = sys.stdin.readline

n = int(input())
num_list = list(map(int, input().split()))
lis = [num_list[0]]

def get_index(num):
    left = 0
    right = len(lis) - 1

    while left <= right:
        mid = (left + right) // 2
        if lis[mid] < num:
            left = mid + 1
        elif lis[mid] > num:
            right = mid - 1
        else:
            return mid
    
    return left

for num in num_list:
    if lis[-1] < num:
        lis.append(num)
    else:
        idx = get_index(num)
        lis[idx] = num

print(len(lis))