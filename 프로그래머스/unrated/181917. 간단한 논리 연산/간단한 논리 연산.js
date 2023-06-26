const result1 = (x, y) => {
    if ( x === y ) return x;
    else return true;
}
    
const result2 = (x, y) => {
    if ( x === y ) return x;
    else return false;
}

function solution(x1, x2, x3, x4) {
    var answer = true;
    
    answer = result2(result1(x1, x2), result1(x3, x4))
    
    
    return answer;
}