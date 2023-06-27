function solution(array) {
    var answer = 0;
    answer = array.join('').split('').filter(item => item === '7').length;
    
    return answer;
}