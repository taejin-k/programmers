function solution(num_str) {
    var answer = 0;
    num_str.split('').forEach(item => answer = answer + Number(item))
    return answer;
}