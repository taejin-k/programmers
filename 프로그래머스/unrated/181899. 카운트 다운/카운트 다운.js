function solution(start, end) {
    var answer = [];
    let arr = Array.from({length: start+1}, (value, index) => index);
    
    answer = arr.reverse().slice(0, start-end+1)
    return answer;
}