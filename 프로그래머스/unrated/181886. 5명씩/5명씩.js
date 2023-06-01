function solution(names) {
    var answer = [];
    answer = names.filter((item, index) => index%5 === 0);
    
    return answer;
}