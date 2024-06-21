function solution(left, right) {
    var answer = 0;
    
    for (let i=left; i<=right; i++) {
        let count = 0;
        
        for (let j=1; j*j<=i; j++) {
            if (i%j === 0) {
                count+= 2;
                if (j*j === i) {
                    count--
                }
            }
        }
        
        console.log(count)
        
        if (count%2 === 0) answer+= i;
        else answer-= i;
    }
    
    return answer;
}