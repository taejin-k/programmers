function solution(n, control) {
    var answer = 0;
    let count = n;
    
    control.split('').forEach(item => {
        if ( item === 'w') count = count + 1;
        else if ( item === 's') count = count - 1;
        else if ( item === 'd') count = count + 10;
        else if ( item === 'a') count = count - 10;
    })
    
    answer = count;
    
    return answer;
}