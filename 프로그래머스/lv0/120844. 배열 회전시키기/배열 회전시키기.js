function solution(numbers, direction) {
    var answer = [];
    
    if (direction === 'right') {
        let pop = numbers.pop();
        numbers.unshift(pop);
    } else {
        let shift = numbers.shift();
        numbers.push(shift);
    }
    
    answer = numbers
    
    return answer;
}