function solution(n) {
    let answer = [n];
    let x = n;
    
    while ( x !== 1) {
        if (x%2 !== 0) {
            x = x*3 + 1;
        } else {
            x = x/2;
        }
        
        answer.push(x);
    }
    
    return answer;
}