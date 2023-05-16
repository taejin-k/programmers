function solution(numbers) {
    var answer = Number.MIN_SAFE_INTEGER;
    
    for (let i=0; i<numbers.length; i++) {
        for (let j=0; j<numbers.length; j++) {
            if (i !== j) {
                if (numbers[i]*numbers[j] > answer) answer = numbers[i]*numbers[j]
            }
        }
    };
    
    return answer;
}