function solution(s) {
    var answer = true;
    
    answer = [...s].every(item => !isNaN(item)) && (s.length === 4 || s.length === 6) ? true : false
    
    return answer;
}