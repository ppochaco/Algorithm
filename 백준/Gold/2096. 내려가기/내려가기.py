import sys
input = sys.stdin.readline

n = int(input())

max_list = [0,0,0]
min_list = [0,0,0]
for i in range(n):
    a, b, c = map(int, input().split())
    
    max_a, max_b, max_c = max_list
    max_list[0] = a + max(max_a, max_b)
    max_list[1] = b + max(max_a, max_b, max_c)
    max_list[2] = c + max(max_b, max_c)

    min_a, min_b, min_c = min_list
    min_list[0] = a + min(min_a, min_b)
    min_list[1] = b + min(min_a, min_b, min_c)
    min_list[2] = c + min(min_b, min_c)
    
print(max(max_list), min(min_list))