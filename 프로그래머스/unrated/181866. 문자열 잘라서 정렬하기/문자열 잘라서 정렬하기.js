function solution(myString) {
    var answer = [];
    answer = myString.split('x').sort().filter(item => item);
    return answer;
}