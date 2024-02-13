import sys
input = sys.stdin.readline

def get_rank():
    global grade

    grade.append(new)
    grade.sort(reverse=True)
    if len(grade) > p:
        grade = grade[:p]
    
    return grade.index(new) + 1

n, new, p = map(int, input().split())
if n == 0:
    print(1)
else:
    grade = list(map(int, input().split()))
    cur_min = grade[-1]
    if n == p:
        if cur_min >= new:
            print(-1)
        else:
            # 등수 구하기
            print(get_rank())
    else:
        if cur_min > new:
            print(n+1)
        else:
            # 등수 구하기
            print(get_rank())