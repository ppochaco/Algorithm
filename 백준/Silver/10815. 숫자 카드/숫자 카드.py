import sys
input = sys.stdin.readline

n = int(input())
n_card = list(map(int, input().split()))
m = int(input())
m_card = list(map(int, input().split()))

n_card.sort()

answer = []
def find_card(card, left, right):
    if left > right:
        answer.append(0)
        return
    mid = (left + right) // 2
    if n_card[mid] > card:
        find_card(card, left, mid - 1)
    elif n_card[mid] < card:
        find_card(card, mid + 1, right)
    else:
        answer.append(1)
        return
for i in m_card:
    find_card(i, 0, len(n_card)-1)

print(*answer)