function solution(my_string, s, e) {
    var answer = '';
    let first = my_string.slice(0, s);
    let second = my_string.slice(s, e+1);
    let third = my_string.slice(e+1, my_string.length);
    
    answer = first + second.split('').reverse().join('') + third
    return answer;
}