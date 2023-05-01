function solution(num_list) {
    var answer = 0;
    answer = num_list.indexOf(num_list.filter(item => item < 0)[0])
    return answer;
}