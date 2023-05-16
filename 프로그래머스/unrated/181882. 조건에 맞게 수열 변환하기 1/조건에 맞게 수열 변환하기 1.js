function solution(arr) {
    var answer = [];
    answer = arr.map(item => item >= 50 && item%2 === 0 ? item/2 : item <50 && item%2 === 1 ? item*2 : item);
    return answer;
}