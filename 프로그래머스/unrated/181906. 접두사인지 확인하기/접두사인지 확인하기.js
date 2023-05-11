function solution(my_string, is_prefix) {
    var answer = 0;
    answer = my_string.split(is_prefix).includes('') ? 1 : 0;
    return answer;
}