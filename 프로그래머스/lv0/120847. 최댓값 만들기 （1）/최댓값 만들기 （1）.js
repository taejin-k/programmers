function solution(numbers) {
    var answer = 0;
    let list = [];
    
    for (let i=0; i<numbers.length; i++) {
        for (let j=0; j<numbers.length; j++) {
            if (i !== j) {
                list.push(numbers[i]*numbers[j]);
            }
        }
    }
    
    answer = Math.max(...list);


    return answer;
}