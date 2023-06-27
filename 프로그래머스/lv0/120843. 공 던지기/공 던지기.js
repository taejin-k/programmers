const result = (numbers) => {
    let arr = numbers;
    
    arr.push(arr.shift());
    arr.push(arr.shift());
    
    return arr;
}

function solution(numbers, k) {
    var answer = 0;
    
    for (let i=0; i<k; i++) {
        if (i !== 0) {
            answer = result(numbers)[0]
        }
    }

    return answer;
}