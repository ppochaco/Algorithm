import sys
from itertools import permutations
input = sys.stdin.readline

n = int(input())
p = permutations(range(1,n+1),n)

for i in p:
    print(*i)