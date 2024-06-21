function solution(s) {
    var answer = '';
    let start = 0;
    let end = Math.floor(s.length/2) + 1;
    
    if (s.length%2 !== 0) start = Math.floor(s.length/2)
    else start = Math.floor(s.length/2) - 1
        
    answer = s.slice(start, end)
    return answer;
}