function solution(n) {
    var answer = 0;
    let x = 0;
    
    while(!answer) {
        if (n%x === 1) {
            answer = x    
        }
        
        x++
    }
    
    return answer;
}