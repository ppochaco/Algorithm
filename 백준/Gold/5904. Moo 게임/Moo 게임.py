import sys
input = sys.stdin.readline

n = int(input())

def moo(i, l, n):
    pre_l = (l - (i+3)) // 2
    if i == 0:
        if n == 1:
            return 'm'
        else:
            return 'o'

    if n <= pre_l:
        return moo(i-1, pre_l, n)
    elif n > pre_l + (i+3):
        return moo(i-1, pre_l, n - (pre_l + (i+3)))
    else:
        if pre_l + 1 == n:
            return 'm'
        else:
            return 'o'
i = 0
k = 0
while n > k:
    k = 2*k + (i+3)
    i += 1

print(moo(i-1,k,n))