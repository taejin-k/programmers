function solution(emergency) {
    var answer = [];
    
    for (let i=0; i<emergency.length; i++) {
        let count = 0;
        
        for (let j=0; j<emergency.length; j++) {
            if (emergency[i] <= emergency[j]) count++         
        }
        answer.push(count);
    }
    
    return answer;
}