function solution(n) {
    var answer = 0;
    let arr = Array.from({length: n}, (value, index) => index + 1);
    
    if ( n%2 === 1 ) {
        answer = arr.reduce((acc, cur) => acc + (cur%2 === 1 ? cur : 0), 0);
    } else {
        answer = arr.reduce((acc, cur) => acc + (cur%2 === 0 ? cur**2 : 0), 0);
    }
    
    return answer;
}