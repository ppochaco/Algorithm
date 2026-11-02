function solution(phone_book) {
    const phone_set = new Set()
    for (const phone of phone_book) {
        let k = 1
        while (k < phone.length) {
            phone_set.add(phone.slice(0, -k))
            k++
        }
    }
    
    for (const phone of phone_book) {
        if (phone_set.has(phone)) return false
    }
    
    return true
}