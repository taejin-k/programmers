function solution(arr) {
    var answer = [];
    let count = 1;
    
    while (!(arr.length <= count)) {
        count = count*2
    }
    
    let gap = count - arr.length;
    
    for (let i=0; i<gap; i++) {
        arr.push(0)
    }
    
    answer = arr;
    
    return answer;
}