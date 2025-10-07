function solution(m, musicinfos) {
    const candidates = [];
    
    for (const musicinfo of musicinfos) {
        get_candidates(musicinfo);
    }
    
    candidates.sort((a, b) => b.play_time - a.play_time);
    
    function get_candidates(musicinfo) {
        const [start_time, end_time, title, melody] = musicinfo.split(',');
        const play_time = get_play_time(start_time, end_time);
        const cur_melody = normalize_melody(melody);
        const total_melody = cur_melody.repeat(Math.ceil(play_time / cur_melody.length)).substr(0, play_time);
        const is_that_song = total_melody.includes(normalize_melody(m));
        if (is_that_song) {
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

function normalize_melody(str) {
    return str.replace(/([A-G])#/g, s => s[0].toLowerCase());
}