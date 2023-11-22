def seperateFile(file):
    flist = []
    index = 0
    
    # HEAD
    temp = ''
    for i, c in enumerate(file):
        if c.isdigit():
            flist.append(temp.upper())
            index = i
            break
        else:
            temp += c
    
    # NUMBER
    temp = ''
    for i in range(index, len(file)):
        if not file[i].isdigit():
            flist.append(int(temp))
            index = i
            temp = ''
            break
        else:
            temp += file[i]
    if temp != '':
        flist.append(int(temp))
    
    flist.append(file)
    
    return flist
    
def solution(files):
    answer = []
    
    fileList = []
    for file in files:
        fileList.append(seperateFile(file))
    
    # print(fileList)
    fileList.sort(key = lambda x: (x[0], x[1]))
    for i in fileList:
        answer.append(i[2])
        
    return answer