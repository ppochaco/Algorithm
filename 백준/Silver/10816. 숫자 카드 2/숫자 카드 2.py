import sys
input = sys.stdin.readline

n = int(input())
n_list = list(map(int, input().split()))
m = int(input())
m_num = list(map(int, input().split()))

n_dict = dict()
for num in n_list:
    if num in n_dict:
        n_dict[num] += 1
    else:
        n_dict[num] = 1

n_num = sorted(set(n_list))

def find_num(num):
    left = 0
    right = len(n_num) - 1
    ischecked = 0

    while left <= right:
        mid = (left + right) // 2
        if n_num[mid] < num:
            left = mid + 1
        elif n_num[mid] > num:
            right = mid - 1
        else:
            ischecked = n_dict[num]
            break
    
    return ischecked

for num in m_num:
    print(find_num(num), end=' ')