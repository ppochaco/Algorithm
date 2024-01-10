import sys
input = sys.stdin.readline

n = int(input())

a = n // 3
b = n % 3

if (a+b) % 2:
    print('SK')
else:
    print('CY')