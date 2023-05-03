function solution(n) {
    var answer = 0;
    let number = 1;
    
    while ( n >= number ) {
        if(n%number === 0) {
            answer++
        }
        
        number++
    }

    return answer;
}