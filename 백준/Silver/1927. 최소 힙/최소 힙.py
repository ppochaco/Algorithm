import sys
from heapq import heappush, heappop
input = sys.stdin.readline

n = int(input())
heap = []

for _ in range(n):
    num = int(input())
    if num == 0:
        if len(heap) < 1:
            print(0)
        else:
            print(heappop(heap))
    else:
        heappush(heap, num)