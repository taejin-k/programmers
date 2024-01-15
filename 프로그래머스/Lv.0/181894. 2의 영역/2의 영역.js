function solution(arr) {
    var answer = [];
    let indexArr = [];

    for(i=0; i<arr.length; i++) {
        if(String(arr[i]).includes('2')) {
            indexArr.push(i);
        }
    }
    
    if (indexArr[0] === undefined) {
        return [-1]
    }

    
    answer = arr.slice(indexArr[0], indexArr.at(-1) + 1);
    
    return answer;
}