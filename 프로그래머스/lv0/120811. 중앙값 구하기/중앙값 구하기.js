function solution(array) {
    var answer = 0;
    answer = array.sort((a, b) => a - b)[array.length/2 - 0.5];
    
    return answer;
}