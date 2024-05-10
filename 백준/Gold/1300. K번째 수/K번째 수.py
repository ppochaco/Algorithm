import sys
input = sys.stdin.readline

n = int(input())
k = int(input())

def get_num_cnt(cur_num):
    num_cnt = 0
    for i in range(1, n+1):
        if i <= cur_num:
            num_cnt += min(cur_num // i, n)
        else:
            break
    return num_cnt

def select_num():
    left = 1
    right = min(10**9, n*n)
    answer = 0
    while left <= right:
        mid = (left + right) // 2
        num_cnt = get_num_cnt(mid)
        
        if num_cnt >= k:
            answer = mid
            right = mid - 1
        else:
            left = mid + 1
    
    return answer

print(select_num())