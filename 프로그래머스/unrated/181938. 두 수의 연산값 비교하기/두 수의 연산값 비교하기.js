function solution(a, b) {
    var answer = 0;
    let value = Number(String(a) + String(b));
    
    if ( 2*a*b > value) {
        answer = 2*a*b;
    } else {
        answer = value
    };
    
    return answer;
}