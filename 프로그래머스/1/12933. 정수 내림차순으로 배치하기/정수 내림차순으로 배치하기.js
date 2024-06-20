function solution(n) {
    var answer = 0;
    
    answer = Number([...String(n)].sort((a, b) => a < b ? 1 : -1).join(''))
    
    return answer;
}