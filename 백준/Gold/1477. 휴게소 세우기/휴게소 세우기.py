import sys, math
input = sys.stdin.readline

n, m, L = map(int, input().split())
term_list = []

def get_rest_num(max_term):
    rest_num = 0
    for term in term_list:
        if term <= max_term:
            rest_num += 1
        else:
            rest_num += math.ceil(term / max_term)
        
    return rest_num

def select_term():
    left = 1
    right = L - 1
    total = n + m + 1
    answer = sys.maxsize
    while left <= right:
        mid = (left + right) // 2
        rest_num = get_rest_num(mid)
        if rest_num <= total:
            answer = min(answer, mid)
            right = mid - 1
        else:
            left = mid + 1

    return answer


rest_list = [0] + list(map(int, input().split())) + [L]
rest_list.sort()

for i in range(n+1):
    term_list.append(rest_list[i+1] - rest_list[i])

print(select_term())
