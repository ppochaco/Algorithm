import sys
input = sys.stdin.readline

n = int(input())
n_card = list(map(int, input().split()))
m = int(input())
m_card = list(map(int, input().split()))

n_card.sort()
answer_dict = dict()

for card in m_card:
    answer_dict[card] = 0

for card in n_card:
    if card in answer_dict:
        answer_dict[card] = 1

answer_list = []
for i in m_card:
    answer_list.append(answer_dict[i])
print(*answer_list)