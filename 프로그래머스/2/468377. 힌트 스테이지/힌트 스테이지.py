def solution(cost, hint):
    n = len(cost)
    hint.append([0, 0])
    my_hints = [0] * n
    
    def game(money, stage):
        if stage == n:
            return money
        
        hint_cnt = min(my_hints[stage], len(cost[stage]) - 1)
        stage_cost = money + cost[stage][hint_cnt]
        
        rt = game(stage_cost, stage + 1)
        
        hint_cost, *hints = hint[stage]
        stage_cost += hint_cost
        for h in hints:
            my_hints[h - 1] += 1
        
        rt = min(rt, game(stage_cost, stage + 1))
        
        for h in hints:
            my_hints[h - 1] -= 1
            
        return rt

    
    return game(0, 0)