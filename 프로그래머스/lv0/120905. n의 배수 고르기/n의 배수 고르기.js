function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter(item => item%n === 0)
    return answer;
}