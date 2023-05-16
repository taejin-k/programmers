function solution(my_string) {
    var answer = [];
    answer = my_string.split(' ').filter(item => item !== '')
    return answer;
}