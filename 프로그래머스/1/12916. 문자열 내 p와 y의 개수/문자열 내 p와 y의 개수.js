function solution(s){
    var answer = true;
    let p = 0;
    let y = 0;
    
    const lowerS = s.toLowerCase();
    
    for (let i=0; i<lowerS.length; i++) {
        if (lowerS[i] === 'p') p++;
        if (lowerS[i] === 'y') y++;
    }
    
    if (p === y) answer = true;
    else answer = false;

    return answer;
}