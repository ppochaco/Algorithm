def getList(record):
    userList = {}
    actList = []
    for user in record:
        temp = user.split()
        act, userId = temp[0], temp[1]
        
        if act == 'Enter' or act == 'Change':
            userList[userId] = temp[2]
        
        if act == 'Enter' or act == 'Leave':
            actList.append([act, userId])
    
    return userList, actList
                
        
    

def solution(record):
    answer = []
    userList, actList = getList(record)
    
    for act, userId in actList:
        nickname = userList[userId]
        if act == 'Enter':
            answer.append(nickname + '님이 들어왔습니다.')
        elif act == 'Leave':
            answer.append(nickname + '님이 나갔습니다.')
        
        
    return answer