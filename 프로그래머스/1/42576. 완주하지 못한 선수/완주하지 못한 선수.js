function solution(participant, completion) {
    const participant_map = new Map();
    
    for (const i in participant) {
        const name = participant[i];
        
        participant_map.set(name, (participant_map.get(name) || 0) + 1);    
    }
    
    for (const i in completion) {
        const name = completion[i];
    
        participant_map.set(name, participant_map.get(name) - 1);   
    }
    
    for (let [k, v] of participant_map) {
        if (v > 0) return k;
    }
}