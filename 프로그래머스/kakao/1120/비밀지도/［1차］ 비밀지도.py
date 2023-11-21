def num_to_digit(n, number):
    digit = ''
    for i in range(n-1,-1,-1):
        if number // 2**i:
            digit += '#'
            number -= 2**i
        else:
            digit += ' '
            
    return digit
    
    
def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        cur_line = ''
        map1 = num_to_digit(n, arr1[i])
        map2 = num_to_digit(n, arr2[i])
        
        for j in range(n):
            if map1[j] == map2[j] and map1[j] == ' ':
                cur_line += ' '
            else:
                cur_line += '#'
        answer.append(cur_line)
    return answer