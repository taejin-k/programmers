function solution(a, d, included) {
    var answer = 0;
    let arr = [];
    
    for (let i=0; i<included.length; i++) {
        arr.push(a + d*i)
    }
    
    // answer = arr;
    
    included.forEach((item, index) => item && (answer = answer + arr[index]));
    return answer;
}