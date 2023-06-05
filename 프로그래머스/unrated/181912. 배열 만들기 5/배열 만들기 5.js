function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (let i=0; i<intStrs.length; i++) {
        if (k < Number(intStrs[i].slice(s, s+l))) {
            answer.push(Number(intStrs[i].slice(s, s+l)))
        }    
    }
    
    return answer;
}