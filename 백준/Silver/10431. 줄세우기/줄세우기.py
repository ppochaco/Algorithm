import sys
input = sys.stdin.readline

n = int(input())
for _ in range(n):
    cases = list(map(int, input().rstrip().split()))
    t, mm = cases[0], cases[1:]
    
    count = 0
    for i in range(20):
        for j in range(i+1,20):
            if mm[i] > mm[j]:
                mm[i], mm[j] = mm[j], mm[i]  
                count += 1
    print(t, count)