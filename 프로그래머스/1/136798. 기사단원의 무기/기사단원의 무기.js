function solution(number, limit, power) {
    var answer = 0;
    
    for (let i=1; i<=number; i++) {
        let point = 0;
        
        for (let j=1; j*j <=i; j++) {
            if (i % j === 0) {
                point++;
                if (j * j !== i) {
                    point++;
                }
            }
        }
        
        if (point > limit) answer+=power;
        else answer+=point;
    
    }
    
    return answer;
}