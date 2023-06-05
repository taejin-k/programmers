function solution(n) {
    let answer = 0;
    let count = 0;
    
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=i; j++) {
            if (i%j === 0) count++
        } 
        if ( count >= 3) answer++;
        count = 0;
    }
    
    return answer;
}