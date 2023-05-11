function solution(numbers, n) {
    var answer = 0;
    
    answer = numbers.reduce((acc, cur) => {
        if ( acc > n ) return acc;
        
        return acc + cur;
    }, 0);
    return answer;
}