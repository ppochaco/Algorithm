import sys
input = sys.stdin.readline

n, m = map(int, input().split())
trees = list(map(int, input().split()))
trees.sort(reverse=True)

def get_home_trees(height):
    home = 0
    for tree in trees:
        if tree <= height:
            break
        home += tree - height
        
    return home

answer = 0
def binary_search(start, end):
    global answer

    height = (start + end) // 2
    home = get_home_trees(height)
    # print(height, home)
    
    if home == m:
        answer = height
        return 
    if start == end or height == end or height == start:
        answer = height
        return
    
    if home < m:
        binary_search(start, height)
    if home > m:
        binary_search(height, end)

binary_search(0, max(trees))

print(answer)