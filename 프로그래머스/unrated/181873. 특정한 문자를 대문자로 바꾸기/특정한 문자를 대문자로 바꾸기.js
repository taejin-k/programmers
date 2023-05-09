function solution(my_string, alp) {
    var answer = '';
    answer = my_string.split('').map(item => item === alp ? item.toUpperCase() : item).join('');
    
    return answer;
}