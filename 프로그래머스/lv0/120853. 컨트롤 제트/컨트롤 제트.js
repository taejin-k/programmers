function solution(s) {
    var answer = 0;
    
    s.split(' ').forEach((item, index, arr) => {
        console.log(Number(item))
        if ( item === 'Z') {
            answer = answer - Number(arr[index - 1])
        } else {
            answer = answer + Number(item)
        }
    })
    
    return answer;
}