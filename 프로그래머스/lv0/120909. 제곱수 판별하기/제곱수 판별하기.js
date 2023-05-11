function solution(n) {
    var answer = 0;
    
    if ( Number.isInteger(Math.sqrt(n)) ) answer = 1
    else answer = 2
    return answer;
}