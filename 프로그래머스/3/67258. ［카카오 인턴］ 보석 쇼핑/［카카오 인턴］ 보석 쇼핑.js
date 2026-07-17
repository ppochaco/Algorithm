function solution(gems) {
    const n = new Set(gems).size
    const gems_map = new Map()
    const answer = [0, gems.length]
    
    gems.forEach((gem, index) => {
        gems_map.delete(gem)
        gems_map.set(gem, index)
        if (gems_map.size === n) {
            const min_index = gems_map.values().next().value
            if (index - min_index < answer[1] - answer[0]) {
                answer[0] = min_index
                answer[1] = index
            }
        }
    })
    
    return answer.map(a => a + 1)
}