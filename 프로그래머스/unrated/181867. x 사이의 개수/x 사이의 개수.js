function solution(myString) {
    var answer = [];
    answer = myString.split('x').map(item => item.length);
    
    return answer;
}