def pickDoll(board, index):
    for i,num in enumerate(board[index]):
        if num:
            board[index][i] = 0
            return num
    return 0
    

def solution(board, moves):
    answer = 0
    
    board = list(map(list, zip(*board)))
    
    bascket = []
    for move in moves:
        doll = pickDoll(board, move-1)
        if doll:
            bascket.append(doll)
    
    while True:
        count = 0

        for i in range(len(bascket)-1):
            if bascket[i] == bascket[i+1]:
                count += 2
                bascket[i] = bascket[i+1] = 0

        if not count:
            break
            
        answer += count

        for i in range(len(bascket)-1):
            if not bascket[i]:
                for j in range(i, len(bascket)):
                    if bascket[j]:
                        bascket[i], bascket[j] = bascket[j], bascket[i]
                        break
                        
        for i in range(len(bascket)):
            if bascket[i] == 0:
                bascket = bascket[:i]
                break
        
        

    return answer