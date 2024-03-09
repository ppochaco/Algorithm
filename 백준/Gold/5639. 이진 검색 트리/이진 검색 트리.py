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

def get_preorder(start, end):
    if start > end:
        return
    
    node = preorder[start]
    mid = end + 1
    for i in range(start+1, end+1):
        if node < preorder[i]:
            mid = i
            break
    
    get_preorder(start+1, mid-1)
    get_preorder(mid, end)
    print(node)

get_preorder(0, len(preorder)-1)