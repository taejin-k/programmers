function solution(n, k) {
    var answer = [];
    answer = Array.from({length: n + 1}, (v, i) => i).filter(item => item !== 0 && item%k === 0)
    return answer;
}