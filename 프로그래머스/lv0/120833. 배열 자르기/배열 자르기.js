function solution(numbers, num1, num2) {
    let answer = numbers;
    answer = answer.slice(num1, num2+1)
    
    return answer;
}