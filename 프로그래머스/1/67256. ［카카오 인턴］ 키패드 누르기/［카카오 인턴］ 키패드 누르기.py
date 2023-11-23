def solution(numbers, hand):
    answer = ''
    left = [1, 4, 7]
    center = [2, 5, 8, 0]
    right = [3, 6, 9]
    
    leftHand = [3, 0]
    rightHand = [3, 2]
    for num in numbers:
        if num in left:
            cur = left.index(num)
            leftHand = [cur, 0]
            answer += 'L'
        elif num in right:
            cur = right.index(num)
            rightHand = [cur, 2]
            answer += 'R'
        else:
            cur = center.index(num)
            leftDistance = abs(leftHand[0] - cur) + abs(leftHand[1] - 1)
            rightDistance = abs(rightHand[0] - cur) + abs(rightHand[1] - 1)
        
            if leftDistance < rightDistance:
                leftHand = [cur, 1]
                answer += 'L'
            elif rightDistance < leftDistance:
                rightHand = [cur, 1]
                answer += 'R'
            else:
                if hand == 'left':
                    leftHand = [cur, 1]
                    answer += 'L'
                elif hand == 'right':
                    rightHand = [cur, 1]
                    answer += 'R'
        
    
    return answer