import sys
input = sys.stdin.readline

test = int(input())

for _ in range(test):
    n, m = map(int, input().split())
    queue_list = list(map(int, input().split()))
    queue = []
    for i in range(n):
        queue.append((queue_list[i], i))
    
    sort_queue = []
    while len(sort_queue) != n:
        priority, index = queue.pop(0)
        # print(priority, index, queue)
    
        if priority < max(queue_list):
            queue.append((priority, index))
        else:
            sort_queue.append(index)
            queue_list.remove(priority)
        
    print(sort_queue.index(m)+1)