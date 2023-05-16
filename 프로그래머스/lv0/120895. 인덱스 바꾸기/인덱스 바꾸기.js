function solution(my_string, num1, num2) {
    var answer = '';
    
    answer = [...my_string].map((item, index, arr) => {
        if ( index === num1 ) return arr[num2]
        else if ( index === num2 ) return arr[num1]
        else return item
    })
    
    
    return answer.join('');
}