import sys
input = sys.stdin.readline

n, r, c = map(int, input().split())
n = 2**n
cnt = 0

def move_z(r,c,n):
    if n == 2:
        return 2*r + c
    
    n //= 2
    s = n**2
    if r < n and c < n:
        return s*0+(move_z(r,c,n))
    elif r < n and c >= n:
        return s*1+move_z(r, c-n, n)
    elif r >= n and c < n:
        return s*2+move_z(r-n, c, n)
    else:
        return s*3+move_z(r-n, c-n, n)

print(move_z(r,c,n))