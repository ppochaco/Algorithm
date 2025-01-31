function solution(genres, plays) {
    const answer = [];
    
    const song_map = new Map();
    const genres_map = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        if (song_map.has(genres[i])) {
            song_map.set(genres[i], [...song_map.get(genres[i]), [i, plays[i]]]);
        } else {
            song_map.set(genres[i], [[i, plays[i]]]);
        }
        
        genres_map.set(genres[i], (genres_map.get(genres[i]) ?? 0) + plays[i]);
    }
    
    const genres_rank = [...genres_map].sort((a, b) => {
        if (a[1] < b[1]) {
            return 1;
        } else {
            return -1;
        }
    })
    
    for (let [genre, _] of genres_rank) {
        const play_sort = [...song_map.get(genre)].sort((a, b) => {
            if (a[1] > b[1]) {
                return 1;
            } else {
                return -1;
            }
        })
        
        for (let i = 0; i < 2; i ++) {
            if (!play_sort.length) {
                break
            }
            
            answer.push(play_sort.pop()[0])
        }
        
        
    }
    
    return answer;
}