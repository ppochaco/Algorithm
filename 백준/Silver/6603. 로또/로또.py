import sys
import itertools
input = sys.stdin.readline

while True:      
    line = input().split()
    n = int(line[0])
    if n == 0:
        break

    num = [int(line[i]) for i in range(1,n+1)]
    num.sort()
    
    combination = list(itertools.combinations(num, 6))
    for i in range(len(combination)):
        print(*combination[i])
    print()
    