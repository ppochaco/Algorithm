function solution(genres, plays) {
    const genres_sum = {};
    genres.forEach((genre, i) => {
        genres_sum[genre] = genres_sum[genre] ? genres_sum[genre] + plays[i] : plays[i]
    })
    
    const genres_cnt = {};
    return genres
        .map((genre, i) => ({genre, play: plays[i], index: i}))
        .sort((a, b) => {
            if(a.genre !== b.genre) return genres_sum[b.genre] - genres_sum[a.genre]
            if (a.play !== b.play) return b.play - a.play
            return a.index - b.index
        })
        .filter(a => {
            if (genres_cnt[a.genre] == 2) return false
            
            genres_cnt[a.genre] = (genres_cnt[a.genre] ?? 0) + 1
            return true
        })
        .map(a => a.index)
}