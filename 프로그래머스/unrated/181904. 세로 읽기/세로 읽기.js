function solution(my_string, m, c) {
    var answer = '';
    let width = my_string.length/m;
    let height = m;
    let count = 0;
    let arr = Array.from(Array(width), () => Array(height).fill(null));
    
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[0].length; j++) {
            if ( j === c-1) {
                answer = answer + my_string[count];
            }
            count++
        }
    }
    
    return answer;
}