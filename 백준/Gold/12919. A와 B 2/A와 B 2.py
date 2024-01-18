import sys
input = sys.stdin.readline

s = list(input().strip())
t = list(input().strip())
answer = 0

def get_s(t):
    global answer
    
    if t == s:
        answer = 1
        return 
    if len(t) == 0:
        return
    
    if t[-1] == 'A':
        get_s(t[:-1])
    if t[0] == 'B':
        get_s(t[1:][::-1])

get_s(t)
print(answer)