function solution(start, end) {
    var answer = [];
    
    answer = [...Array.from({ length: end + 1}, (value, index) => index)].slice(start, end + 1);
    return answer;
}