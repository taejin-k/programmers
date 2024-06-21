function solution(arr, divisor) {
    var answer = [];
    
    answer = arr.filter(item => item%divisor === 0).sort((a, b) => a - b)
    if (answer.length === 0) return [-1]
    return answer;
}