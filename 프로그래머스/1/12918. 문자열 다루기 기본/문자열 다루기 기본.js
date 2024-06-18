function solution(s) {
    var answer = true;
    
    let flag = s.split('').every(item => !isNaN(Number(item)))
    
    if (flag && (s.length === 4 || s.length === 6)) answer = true;
    else answer = false
    
    return answer;
}