function solution(x) {
    var answer = true;
    
    if (x%[...String(x)].reduce((a, b) => a + Number(b), 0) !== 0) answer = false
    
    return answer;
}