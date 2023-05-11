function solution(my_string, index_list) {
    var answer = '';
    index_list.forEach(item => answer = answer + my_string[item]);
    return answer;
}