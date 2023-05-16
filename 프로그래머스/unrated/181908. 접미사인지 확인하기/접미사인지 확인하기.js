function solution(my_string, is_suffix) {
    var answer = 0;
    answer = my_string.split(is_suffix).includes('') ? 1 : 0
    return answer;
}