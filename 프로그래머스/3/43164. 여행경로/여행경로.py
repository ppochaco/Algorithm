def solution(tickets):
    answer = []
    visited = [False] * len(tickets)
    
    def dfs(start, path):
        if (len(path) == len(tickets) + 1):
            answer.append(path)
            return

        for index, ticket in enumerate(tickets):
            a, b = ticket
            if start != a:
                continue
            if visited[index]:
                continue

            visited[index] = True
            dfs(b, path + [b])
            visited[index] = False
    
    dfs('ICN', ['ICN'])
    answer.sort()

    return answer[0]
