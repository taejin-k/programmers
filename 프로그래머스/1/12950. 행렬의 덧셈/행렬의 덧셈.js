function solution(arr1, arr2) {
    var answer = [];
    
    for (let i=0; i<arr1.length; i++) {
        let array = [];
        
        for (let j=0; j<arr1[0].length; j++) {
            array.push((arr1[i][j] + arr2[i][j]));
        }
        
        answer.push(array)
    }

    return answer;
}