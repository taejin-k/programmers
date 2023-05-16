function solution(str_list, ex) {
    var answer = '';
    answer = str_list.filter(item => !item.includes(ex)).join('');
    return answer;
}