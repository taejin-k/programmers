function solution(my_string, n) {
    var answer = '';
    answer = my_string.split('').map(item => item.repeat(n)).join('');
    return answer;
}