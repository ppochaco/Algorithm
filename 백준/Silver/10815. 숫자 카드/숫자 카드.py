import sys
input = sys.stdin.readline

n = int(input())
n_card = list(map(int, input().split()))
m = int(input())
m_card = list(map(int, input().split()))

n_card.sort()
answer = []

def find_card(card, left, right):
    ischecked = 0
    while left <= right:
        mid = (left + right) // 2
        if n_card[mid] < card:
            left = mid + 1
        elif n_card[mid] > card:
            right = mid - 1
        else:
            ischecked = 1
            break
    answer.append(ischecked)

for i in m_card:
    find_card(i, 0, len(n_card)-1)

print(*answer)