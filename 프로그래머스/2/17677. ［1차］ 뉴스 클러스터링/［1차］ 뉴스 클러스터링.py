import math
def getOrd(s):
    newStr = ''
    
    for i in s:
        if i.isalpha():
            newStr += i.upper()
        else:
            newStr += '_'
            
    return newStr

def solution(str1, str2):
    answer = 0
    
    str1 = getOrd(str1)
    str2 = getOrd(str2)

    list1 = []
    for i in range(len(str1)-1):
        if not(str1[i] == '_' or str1[i+1] == '_'):
            list1.append(str1[i] + str1[i+1])
    
    list2 = []
    for i in range(len(str2)-1):
        if not (str2[i] == '_' or str2[i+1] == '_'):
            list2.append(str2[i] + str2[i+1])
            
    print(list1)
    print(list2)
    
    newlist1 = []
    for c in list1:
        if '_' not in c:
            newlist1.append(c)
            
    newlist2 = []
    for c in list2:
        if '_' not in c:
            newlist2.append(c)
    
    if not len(newlist1 + newlist2):
        return 1 * 65536
    
    arr = set(newlist1 + newlist2)
    allarr = 0
    subarr = 0
    for c in arr:
        count1 = 0
        count2 = 0
    
        if c in newlist1:
            count1 += newlist1.count(c)
        if c in newlist2:
            count2 += newlist2.count(c)
        
        if count1 != 0 and count2 != 0:
            subarr += min(count1, count2)      
        allarr += count1 + count2
    # print(subarr, allarr)
    answer = math.floor(subarr / (allarr-subarr) * 65536)
    return answer