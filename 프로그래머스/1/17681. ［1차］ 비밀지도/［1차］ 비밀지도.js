function solution(n, arr1, arr2) {
    var answer = []

    let array1 = arr1.map(item => item.toString(2).padStart(n, '0'))
    let array2 = arr2.map(item => item.toString(2).padStart(n, '0'))
    
    for (let i=0; i<array1.length; i++) {
        for (let j=0; j<array2.length; j++) {
            if (array1[i][j] === '0' && array2[i][j] === '0') {
                answer[i] = (answer[i] || '') + ' ';
            } else {
                answer[i] = (answer[i] || '') + '#'
            }
        }
    }
    
    return answer;
}