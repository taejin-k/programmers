function solution(number) {
    var answer = 0;
    let sum = [...number].reduce((acc, cur) => acc + Number(cur), 0);
    answer = sum%9
    return answer;
}