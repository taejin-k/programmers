function solution(num_list, n) {
    var answer = [];
    answer = num_list.slice(n-1, num_list.length)
    return answer;
}