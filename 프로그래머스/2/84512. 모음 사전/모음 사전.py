from itertools import product

def solution(word):
    dictionary = []
    for cnt in range(1, 5 + 1):
        for i in product(['A', 'E', 'I', 'O', 'U'], repeat=cnt):
            dictionary.append(''.join(i))
    dictionary.sort()
    
    return dictionary.index(word) + 1


    