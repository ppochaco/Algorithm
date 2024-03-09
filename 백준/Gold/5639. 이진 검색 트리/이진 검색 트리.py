import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

preorder = []
while True:
    try:
        v = int(input())
        preorder.append(v)
    except:
        break

def get_left_cnt(node, p):
    for i,v in enumerate(p):
        if node < v:
            return i

def get_postorder(p):
    node = p[0]

    if len(p) == 1:
        print(node)
        return
    
    left_cnt = get_left_cnt(node, p[1:])
    if left_cnt:
        get_postorder(p[1:left_cnt+1])
    else:
        left_cnt = 0
    
    right_cnt = len(p) - left_cnt - 1
    if right_cnt > 0:          
        get_postorder(p[len(p)-right_cnt:])
    
    print(node)

get_postorder(preorder)