function solution(order) {
    var answer = 0;
    answer = [...String(order)].filter(item => item !== '0' && Number(item)%3 === 0).length;
    return answer;
}