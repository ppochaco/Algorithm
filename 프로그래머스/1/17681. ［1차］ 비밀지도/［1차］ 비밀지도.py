def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        cur_line = ''
        
        map1 = bin(arr1[i])[2:].rjust(n, '0')
        map2 = bin(arr2[i])[2:].rjust(n, '0')
        
        for j in range(n):
            if map1[j] == '0' and map2[j] == '0':
                cur_line += ' '
            else:
                cur_line += '#'
        answer.append(cur_line)
    return answer