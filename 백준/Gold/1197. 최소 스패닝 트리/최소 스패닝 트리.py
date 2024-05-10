import sys
input = sys.stdin.readline

v, e = map(int, input().split())
graph = list(list(map(int, input().split())) for _ in range(e))
graph.sort(key=lambda x:x[2])

parent = list(i for i in range(v+1))
def get_parent(node):
    if parent[node] == node:
        return node
    parent[node] = get_parent(parent[node])
    
    return parent[node]

def union_parent(a, b):
    a = get_parent(a)
    b = get_parent(b)

    if a < b:
        parent[b] = a
    else:
        parent[a] = b

answer = 0
for a, b, c in graph:
    if get_parent(a) != get_parent(b):
        union_parent(a, b)
        answer += c

print(answer)