function solution(arr1, arr2) {
    var answer = 0;
    
    if (arr1.length > arr2.length) {
        answer = 1
    } else if (arr1.length < arr2.length) {
        answer = -1
    } else {
        let arrSum1 = arr1.reduce((acc, cur) => acc + cur, 0);
        let arrSum2 = arr2.reduce((acc, cur) => acc + cur, 0);
        
        if ( arrSum1 > arrSum2) {
            answer = 1;
        } else if ( arrSum1 < arrSum2 ) {
            answer = -1
        } else {
            answer = 0;
        }
    }
    
    return answer;
}