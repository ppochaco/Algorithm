import heapq

T = int(input())
d = [[0, 1], [1, 0], [0, -1], [-1, 0]]

def bfs(n):
  queue = []
  visited = [[-1 for _ in range(n)] for _ in range(n)]

  heapq.heappush(queue, [0, 0, 0])
  visited[0][0] = 0

  while len(queue):
    time, x, y = heapq.heappop(queue)
    if x == n - 1 and y == n - 1:
      return time
    
    for [dx, dy] in d:
      [nx, ny] = [x + dx, y + dy]
      if nx < 0 or ny < 0 or nx >= n or ny >= n:
        continue

      if visited[nx][ny] != -1:
        continue

      visited[nx][ny] = visited[x][y] + graph[nx][ny]
      heapq.heappush(queue, [visited[nx][ny], nx, ny])

for test_case in range(1, T + 1):
  n = int(input())
  graph = []
  for _ in range(n):
    graph.append(list(map(int, input())))

  print(f"#{test_case} {bfs(n)}")