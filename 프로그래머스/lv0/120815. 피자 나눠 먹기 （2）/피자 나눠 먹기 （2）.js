function solution(n) {
    var answer = 1;
    let flag = false;
    
    while (!flag) {
       if ( (answer*6)%n === 0 ) {
           flag = true
       } else {
           answer = answer + 1
       }
    }
        
    return answer;
}