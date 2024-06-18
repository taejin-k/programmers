function solution(s) {
    var answer = [];
    let arrayS = s.split('')
    
    for (let i=s.length-1; i>=0; i--) {
        answer[i] = -1;
        
        for (let j=i-1; j>=0; j--) {
            if (arrayS[i] === arrayS[j]) {
                answer[i] = i - j;
                break;
            }
        
        }
    }
    
    return answer;
}