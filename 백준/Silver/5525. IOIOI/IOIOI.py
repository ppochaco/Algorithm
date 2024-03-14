import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
s = input().strip()

Pn = 'I' + ('OI' * n)

answer = 0
i = 0
while i < m:
    if s[i] == Pn[0]:
        for j in range(1, len(Pn)):
            if i + j == m:
                break
            if s[i+j] != Pn[j]:
                break
        else:
            answer += 1
        i += 1
    else:
        i += 1
print(answer)