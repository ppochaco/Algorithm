import sys
input = sys.stdin.readline
from collections import Counter

n, m = map(int, input().split())
keyword = list(input().strip() for _ in range(n))
keyword_dic = Counter(keyword)

board = list(input().strip().split(',') for _ in range(m))

board_cnt = n
for cur_board in board:
    for cur_keyword in cur_board:
        if keyword_dic[cur_keyword]:
            board_cnt -= 1
            keyword_dic.pop(cur_keyword)
    print(board_cnt)