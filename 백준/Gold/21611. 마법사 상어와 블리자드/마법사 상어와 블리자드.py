import sys
input = sys.stdin.readline

n,m = map(int,input().split())
board = [list(map(int, input().split())) for _ in range(n)]
magic = []
location = {}
for _ in range(m):
    d, s = map(int, input().split())
    magic.append((d,s))

def init():
    x, y = n//2, n//2
    dx = [0, 1, 0, -1]
    dy = [-1, 0, 1, 0]
    index, depth = 1, 0
    while True:
        for i in range(4):
            if i % 2 == 0:
                depth += 1
            
            for _ in range(depth):
                x, y = x + dx[i], y + dy[i]
                location[(x,y)] = index
                beads.append(board[x][y])
                index += 1
                if x == 0 and y == 0:
                    return

def destroy(d, s):
    x, y = n//2, n//2
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    for _ in range(s):
        x, y = (x + dx[d]) % n, (y + dy[d]) % n
        index = location[(x,y)]
        beads[index] = 0

def move():
    global beads
    beads = [v for v in beads if v != 0]

    beads.extend([0]*((n*n-1) - len(beads)))
    beads = [0] + beads

    
def explosion():
    global answer
    cur_num, count, start = beads[0], 0, 0
    flag = False
    for i, bead in enumerate(beads):
        if cur_num == bead:
            count += 1
        else:
            if count >= 4:
                for j in range(start, i):
                    beads[j] = 0
                answer += cur_num * count
                flag = True

            cur_num, count, start = bead, 1, i

    return flag

def change():
    global beads
    cur_num, count = beads[1], 0
    temp_beads = [0]

    for i in range(1, len(beads)):
        if cur_num == beads[i]:
            count += 1
        else:
            temp_beads.extend((count, cur_num))
            cur_num, count = beads[i], 1
    if len(temp_beads) > len(beads):
        temp_beads = temp_beads[:len(beads)]
    else:
        temp_beads.extend([0]*(len(beads)-len(temp_beads)))

    beads = temp_beads

answer = 0
beads = [0]

init()

for d, s in magic:
    destroy(d-1, s)
    move()
    while explosion():
        move()
    change()

print(answer)