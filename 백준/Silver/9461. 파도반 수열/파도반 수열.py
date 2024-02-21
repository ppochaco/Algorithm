import sys
input = sys.stdin.readline

t = int(input())
arr = [1, 1, 1, 2, 2]

for i in range(5, 101):
    arr.append(arr[i-1]+arr[i-5])

for i in range(t):
    num = int(input())
    print(arr[num-1])

# print(arr)