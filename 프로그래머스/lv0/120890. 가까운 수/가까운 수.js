function solution(array, n) {
    var answer = 0;
    
    answer = array.reduce((acc, cur, idx) => {
        if ( idx === 0 ) {
            acc = cur
        } else if ( Math.abs(acc-n) > Math.abs(cur-n) ) {
            acc = cur
        } else if ( Math.abs(acc-n) === Math.abs(cur-n) && acc > cur) {
            acc = cur   
        }
        return acc
    }, 0);
    
    return answer;
}