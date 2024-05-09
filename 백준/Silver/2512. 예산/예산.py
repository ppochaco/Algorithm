import sys
input = sys.stdin.readline

n = int(input())
city_list = list(map(int, input().split()))
total_m = int(input())

def get_sum_m(k):
    sum_money = 0
    for city in city_list:
        if city < k:
            sum_money += city
        else:
            sum_money += k
    return sum_money

def get_max_m():
    left = 0
    right = total_m
    answer = total_m
    while left <= right:
        mid = (left + right) // 2
        sum_m = get_sum_m(mid)
        
        if sum_m < total_m:
            answer = mid
            left = mid + 1
        elif sum_m > total_m:
            right = mid - 1
        else:
            return mid
    
    return answer

if get_sum_m(total_m) <= total_m:
    print(max(city_list))
else:
    print(get_max_m())