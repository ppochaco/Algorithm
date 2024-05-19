import sys
input = sys.stdin.readline

n, m, k = map(int, input().split())
candy = [0] + list(map(int, input().split()))
friend = [0] + [i for i in range(1, n+1)]


def union_node(node_a, node_b):
    node_a = find_parent(node_a)
    node_b = find_parent(node_b)
    if node_a == node_b:
        return
    if node_a < node_b:
        friend[node_a] = node_b
    else:
        friend[node_b] = node_a


def find_parent(node):
    while node != friend[node]:
        node = friend[node]

    return node


for _ in range(m):
    a, b = map(int, input().split())
    union_node(a, b)

candy_sum = [[] for _ in range(n+1)]
for i in range(1, n+1):
    parent = find_parent(i)
    if candy_sum[parent]:
        candy_sum[parent][0] += candy[i]
        candy_sum[parent][1] += 1
    else:
        candy_sum[parent] = [candy[i], 1]

queue = []
for cur_candy in candy_sum:
    if cur_candy:
        queue.append(cur_candy)

dp = [0] * k
for cur_candy, cur_num in queue:
    for i in range(k-1, cur_num -1, -1):
        dp[i] = max(dp[i], dp[i - cur_num] + cur_candy)

print(max(dp))
