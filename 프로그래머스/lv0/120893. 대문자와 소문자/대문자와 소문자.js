function solution(my_string) {
    var answer = '';
    answer = my_string.split('').map(item => item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()).join('')
    return answer;
}