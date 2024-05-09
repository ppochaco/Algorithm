import sys
input = sys.stdin.readline

n, m = map(int, input().split())
time_list = list(int(input()) for _ in range(n))
time_list.sort()

def get_check_num(max_time):
    check_num = 0
    for time in time_list:
        check_num += max_time // time
    
    return check_num

def select_time():
    left = 1
    right = m * min(time_list)
    answer = sys.maxsize
    while left <= right:
        mid = (left + right) // 2
        check_num = get_check_num(mid)
        if check_num < m:
            left = mid + 1
        else:
            answer = min(answer, mid)
            right = mid - 1

    return answer
        
print(select_time())