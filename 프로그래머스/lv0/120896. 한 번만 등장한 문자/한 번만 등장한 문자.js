function solution(s) {
    var answer = '';
    
    answer = [...s].filter(item => s.split(item).length === 2).sort().join('');
    return answer;
}