finalList = []

def getBannedList(user, ban):
    if len(user) != len(ban):
        return False
    
    for i, item in enumerate(ban):
        if item == '*':
            continue
        if item != user[i]:
            return False
        
    return True

def getList(cur, result, banList):
    if cur == len(banList):
        result.sort()
        newList = result[:]
        if newList not in finalList:
            finalList.append(newList)
        return 
    
    for name in banList[cur]:
        if name not in result:
            result.append(name)
            getList(cur+1, result, banList)
            result.remove(name)
            
def solution(user_id, banned_id):
    answer = 0
    
    banList = [[] for _ in range(len(banned_id))]
    for i,ban in enumerate(banned_id):
        for user in user_id:
            if getBannedList(user, ban):
                banList[i].append(user)
    result = []
    getList(0, result, banList)
    # print(finalList)
    
    return len(finalList)