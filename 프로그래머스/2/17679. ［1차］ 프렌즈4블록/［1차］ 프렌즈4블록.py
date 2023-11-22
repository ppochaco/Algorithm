dx = [0, 1, 1]
dy = [1, 0, 1]

def splitBoard(board):
    newBoard = []
    
    for i in board:
        temp = []
        for c in i:
            temp.extend(c.split())
        newBoard.append(temp)
        
    return newBoard

def removeBlock(board, isRemove, x, y, m, n):
    count = 1

    for i in range(3):
        nx, ny = x + dx[i], y + dy[i]
        if nx < 0 or nx >= m or ny < 0 or ny >= n:
            return
        if board[x][y] == board[nx][ny]:
            count += 1
    
    if count == 4:
        isRemove[x][y] = True
        for i in range(3):
            nx, ny = x + dx[i], y + dy[i]
            isRemove[nx][ny] = True
            
def solution(m, n, board):
    answer = 0
    
    board = splitBoard(board)
    
    while True:
        isRemove = [[False]*n for _ in range(m)]  
        for i in range(m):
            for j in range(n):
                if board[i][j] != '_':
                    removeBlock(board, isRemove, i, j, m, n)

        removeNum = 0
        for i in range(m):
            for j in range(n):
                if isRemove[i][j]:
                    board[i][j] = '_'
                    removeNum += 1

        if removeNum:
            answer += removeNum
        else:
            break

        removeBoard = list(map(list, zip(*board)))

        for i in range(n):
            temp = ''.join(removeBoard[i]).replace('_','').rjust(m, '_')
            tempList = []
            for j in temp:
                tempList.extend(j.split())
            removeBoard[i] = tempList
        board = list(map(list, zip(*removeBoard)))
        

    return answer