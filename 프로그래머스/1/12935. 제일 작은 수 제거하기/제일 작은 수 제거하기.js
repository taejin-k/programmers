function solution(arr) {
    var answer = [];
    
    answer = arr.filter(item => item !== Math.min(...arr));
    if (answer.length === 0) [-1]
    return answer;
}