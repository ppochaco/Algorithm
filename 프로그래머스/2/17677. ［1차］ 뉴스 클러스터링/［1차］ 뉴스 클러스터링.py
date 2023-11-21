import math

def stringToList(s):
    # 문자열중에서 영문자만 선택
    newStr = ''
    for i in s:
        if i.isalpha():
            newStr += i.upper()
        else:
            newStr += '_'
            
    # 빈 문자열 제외하고 두 문자씩 묶어서 리스트 만들기
    clist = []
    for i in range(len(newStr)-1):
        if newStr[i] != '_' and newStr[i+1] != '_':
            clist.append(newStr[i] + newStr[i+1])
            
    return clist

def solution(str1, str2):
    answer = 0
    
    list1 = stringToList(str1)
    list2 = stringToList(str2)
    
    # 모두 빈 리스트면 자카드 유사도 1
    if not len(list1 + list2):
        return 1 * 65536
    
    # 자카드 유사도 구하기
    arr = set(list1 + list2)
    allarr = 0
    subarr = 0
    
    for c in arr:
        count1 = 0
        count2 = 0
    
        if c in list1:
            count1 += list1.count(c)
        if c in list2:
            count2 += list2.count(c)
        
        # 두 리스트 모두 같은 요소 가지면 적은 개수를 교집합 개수에 더하기
        if count1 != 0 and count2 != 0:
            subarr += min(count1, count2) 
            
        # 합집합에 두 리스트의 요소의 개수 더하기
        allarr += count1 + count2
        
    answer = math.floor(subarr / (allarr-subarr) * 65536)
    
    return answer