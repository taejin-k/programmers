function solution(n) {
    var answer = '';
    let label = "수박";
    
    if (n%2 === 0) answer = label.repeat(n/2);
    else answer = label.repeat(Math.floor(n/2)) + '수'
    
    
    return answer;
}