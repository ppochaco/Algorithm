function solution(m, musicinfos) {
    const candidates = [];
    
    for (const musicinfo of musicinfos) {
        get_candidates(musicinfo);
    }
    
    candidates.sort((a, b) => b.play_time - a.play_time);
    
    function get_candidates(musicinfo) {
        const [start_time, end_time, title, melody] = musicinfo.split(',');
        const play_time = get_play_time(start_time, end_time);
        const total_melody = get_total_melody(play_time, parse_melody(melody));
        if (is_that_song(total_melody, parse_melody(m))) {
            candidates.push({ play_time, title })
        }
    }

    if (!candidates.length) return "(None)";
    return candidates[0].title;
}

function get_play_time(start, end) {
    const start_time = parse_time(start);
    const end_time = parse_time(end);
    
    return (end_time.hour - start_time.hour) * 60 + (end_time.minute - start_time.minute)
}

function parse_time(str) {
    const [hour, minute] = str.split(":");
    return { hour, minute }
}

function parse_melody(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            result.push(result.pop() + '#');
            continue;
        }
        result.push(str[i]);
    }
    
    return result;
}

function get_total_melody(play_time, melody) {
    let total_melody = [];
    for (let i = 0; i < Math.floor(play_time / melody.length); i++) {
        total_melody = total_melody.concat(melody);
    }
    if (play_time % melody.length) {
        total_melody = total_melody.concat(melody.slice(0, play_time % melody.length));
    }
    
    return total_melody;
}

function is_that_song(melody, m) {
    for (let i = 0; i < melody.length; i++) {
        if (melody[i] === m[0] && is_equal(melody.slice(i, i + m.length), m)) {
            return true;
        }
    }
    
    return false;
}

function is_equal(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    
    return true;
}