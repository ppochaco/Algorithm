function solution(nodeinfo) {
    nodeinfo.map((a, i) => a.push(i + 1))
    nodeinfo.sort((a, b) => a[0] - b[0])
    
    const answer = [[], []]
    
    function set_tree(start, end) {
        if (start < 0 || end < 0 || end < start) return

        let parent = [-1, -1]
        let index = -1
        for (let i = start; i <= end; i++) {
            const [x, y, number] = nodeinfo[i]
            if (parent[1] < y) {
                parent = [x, y]
                index = i
            }
        }
        answer[0].push(nodeinfo[index][2])
        set_tree(start, index - 1)
        set_tree(index + 1, end)
        answer[1].push(nodeinfo[index][2])
    }
    
    set_tree(0, nodeinfo.length - 1)
    
    return answer
}