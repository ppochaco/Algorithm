import sys
input = sys.stdin.readline

n = int(input())
paper = [list(map(int, input().split())) for _ in range(n)]
white = 0
blue = 0

def cut_paper(x,y, n):
    global white, blue
    if n == 0:
        return
    color = paper[x][y]
    
    cut = False
    for i in range(x, n+x):
        for j in range(y, n+y):
            if color != paper[i][j]:
                cut = True
                break
        if cut:
            break

    if cut:
        n //= 2
        cut_paper(x, y, n)
        cut_paper(x+n, y, n)
        cut_paper(x, y+n, n)
        cut_paper(x+n, y+n, n)
    else:
        if color == 1:
            blue += 1
        else:
            white += 1

cut_paper(0,0, n)
print(white)
print(blue)