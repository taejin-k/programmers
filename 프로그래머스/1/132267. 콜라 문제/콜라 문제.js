function solution(a, b, n) {
    var answer = 0;
    let coca = n;

    while (coca >= a) {
        if (coca%a === 0) {
            answer = answer + (coca/a)*b;
            coca = (coca/a)*b;
            
        } else {
            answer = answer + Math.floor(coca/a)*b;
            coca = coca%a + Math.floor(coca/a)*b;
        }
        
        console.log('~', answer)
    }
    
    return answer;
}