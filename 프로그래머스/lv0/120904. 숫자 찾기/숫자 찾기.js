function solution(num, k) {
    var answer = -1;
    let count = [...String(num)].filter(item => Number(item) === k).length;
    
    if ( count ) answer = [...String(num)].indexOf(String(k)) + 1;
    else answer = -1
    
    return answer 
    
}