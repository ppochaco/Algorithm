import sys
input = sys.stdin.readline

g = int(input())
p = int(input())
plane = [int(input()) for _ in range(p)]
gate = [i for i in range(g+1)]
answer = 0

def find_gate(x):
    if gate[x] != x:
        gate[x] = find_gate(gate[x])

    return gate[x]

def close_gate(a, b):
    parent_a = find_gate(a)
    parent_b = find_gate(b)
    
    gate[parent_b] = parent_a

for cur_plane in plane:
    cur_gate = find_gate(cur_plane)

    if cur_gate == 0:
        break

    close_gate(cur_gate-1, cur_gate)
    answer +=1

print(answer)