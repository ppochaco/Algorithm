import sys
input = sys.stdin.readline

n = int(input())
n_num = list(map(int, input().split()))
m = int(input())
m_num = list(map(int, input().split()))

n_num.sort()

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
            ischecked = 1
            break
    return ischecked

for num in m_num:
    print(find_num(num))
