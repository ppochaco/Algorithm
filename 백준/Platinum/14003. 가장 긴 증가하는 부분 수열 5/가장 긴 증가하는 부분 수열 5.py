import sys
input = sys.stdin.readline

n = int(input())
num_list = list(map(int, input().split()))

lst = [num_list[0]]
idx = []

def get_index(num):
    left = 0
    right = len(lst) - 1
    while left <= right:
        mid = (left + right) // 2
        if lst[mid] < num:
            left = mid + 1
        elif lst[mid] > num:
            right = mid - 1
        else:
            return mid
    return left

for num in num_list:
    if lst[-1] < num:
        lst.append(num)
        idx.append(len(lst) - 1)
    else:
        cur_index = get_index(num)
        lst[cur_index] = num
        idx.append(cur_index)

cur_index = max(idx)
answer = []
for i in range(n-1, -1, -1):
    if idx[i] == cur_index:
        answer.append(num_list[i])
        cur_index -= 1

answer.sort()

print(len(answer))
print(*answer)