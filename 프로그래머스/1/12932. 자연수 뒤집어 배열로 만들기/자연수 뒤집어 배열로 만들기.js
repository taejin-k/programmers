function solution(n) {
    var answer = [];
    
    answer = [...String(n)].reverse().map(item => Number(item));
    return answer;
}