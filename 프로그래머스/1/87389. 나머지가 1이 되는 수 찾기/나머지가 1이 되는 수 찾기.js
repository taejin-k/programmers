function solution(n) {
    var answer = n;
    
    for (let i=2; i<n; i++) {
        if (n%i === 1 && i<answer) {
            answer = i;
        }    
    }
    
    return answer;
}