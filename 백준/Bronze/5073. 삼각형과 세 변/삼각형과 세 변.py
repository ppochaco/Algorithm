import sys
input = sys.stdin.readline

while True:
    tri = list(map(int, input().split()))
    tri.sort(reverse=True)
    a, b, c = tri
    if a + b + c == 0:
        break
    
    if a < b + c:
        if a == b == c:
            print("Equilateral")
        elif a == b or b == c or c == a:
            print("Isosceles")
        else:
            print("Scalene")
    else:
        print("Invalid")