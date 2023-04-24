function solution(n) {
    var answer = n%2 === 0 ? n : n-1;
    var count = n%2 === 0 ? n : n-1;
    
    while ( count > 0 ) {
        count = count - 2;
        answer = answer + count;
        
    }
    
    
    return answer;
}