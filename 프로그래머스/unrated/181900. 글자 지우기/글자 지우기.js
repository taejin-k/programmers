function solution(my_string, indices) {
    var answer = '';
    let arr = [...my_string];
    
    for (let i=0; i<indices.length; i++) {
        arr[indices[i]] = '';
    }
    
    answer = arr.join('')
    return answer;
}