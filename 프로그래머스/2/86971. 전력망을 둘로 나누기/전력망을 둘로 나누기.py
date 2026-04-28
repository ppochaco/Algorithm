from collections import deque

graph = []

def solution(n, wires):
    global graph
    
    answer = n
    graph = [[] for i in range(n + 1)]
    
    for a, b in wires:
        graph[a].append(b)
        graph[b].append(a)
    
    for a, b in wires:
        visited = [False] * (n + 1)
        
        visited[b] = True
        cnt = bfs(a, visited)
        answer = min(answer, abs(cnt - (n - cnt)))
        
    return answer

def bfs(start_node, visited):
    global graph
    
    cnt = 1
    visited[start_node] = True
    queue = deque([start_node])
    
    while(len(queue)):
        node = queue.popleft()
        for next_node in graph[node]:
            if visited[next_node]:
                continue

            visited[next_node] = True
            queue.append(next_node)
            cnt += 1
    
    return cnt
    