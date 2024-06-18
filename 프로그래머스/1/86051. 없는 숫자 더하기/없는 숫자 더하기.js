function solution(numbers) {
    var answer = -1;
    
    answer = 45 - numbers.reduce((a, b) => a + b,0)
    return answer;
}