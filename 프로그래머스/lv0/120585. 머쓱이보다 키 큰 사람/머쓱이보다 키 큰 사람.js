function solution(array, height) {
    var answer = 0;
    answer = array.filter(item => item > height).length
    return answer;
}