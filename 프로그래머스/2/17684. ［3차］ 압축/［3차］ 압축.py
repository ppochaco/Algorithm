def makeDictionary():
    dic = {}
    for i in range(ord('A'), ord('Z')+1):
        dic[chr(i)] = i-ord('A')+1    
    return dic
    
def getWord(msg, dic):
    index = 0
    w = msg[0]
    c = ''
    
    while True:
        if w in dic:
            index += 1
            if index >= len(msg):
                return -1, -1, -1
            w += msg[index]
        else:
            w = msg[0:index]
            
            if index+1 > len(msg):
                return w, -1, -1
            else:
                c = msg[index:index+1]
                return w, c, index
    
def solution(msg):
    answer = []
    # 1. 단어 사전 초기화하기
    dic = makeDictionary()
    
    
    while True:
        # 2. 입력과 일치하는 가장 긴 문자열 w 찾기
        w, c, index = getWord(msg, dic)
        
        # 마지막 아이면 종료하기
        if w == -1 or c == -1:
            print(msg)
            answer.append(dic[msg])
            break
            
        # 3. w의 색인 번호 출력하고 입력에서 제거하기
        answer.append(dic[w])
        msg = msg[index:]
        # 4. 처리안된 단어를 사전에 등록하기
        dic[w+c] = len(dic) + 1
    
    
    return answer