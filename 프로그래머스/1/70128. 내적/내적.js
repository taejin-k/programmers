function solution(a, b) {
    var answer = 0;
    
    answer = a.reduce((acc, cur, index) => acc + cur*b[index], 0);
    return answer;
}