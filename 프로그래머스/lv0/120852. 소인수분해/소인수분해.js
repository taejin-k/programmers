function solution(n) {
    var answer = [];
    let number = n;
    let count = 2;
    
    while (!(number < count )) {
        if (number%count === 0) {
            number = number/count
            
            if (!answer.includes(count)) answer.push(count);
        } else {
            count++
        }
    }
    
    const set = new Set();
    let setArr = [...answer];
    
    answer = setArr
    
    return answer;
}