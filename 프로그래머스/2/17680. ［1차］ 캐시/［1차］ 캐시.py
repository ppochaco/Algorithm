def solution(cacheSize, cities):
    answer = 0
    cache = []
    
    for city in cities:
        city = city.upper()
        
        if city in cache:
            cache.remove(city)
            answer += 1
        else:
            answer += 5
            if not cacheSize:
                continue
            if len(cache) == cacheSize:
                cache.pop(0)
        cache.append(city)
        
    return answer