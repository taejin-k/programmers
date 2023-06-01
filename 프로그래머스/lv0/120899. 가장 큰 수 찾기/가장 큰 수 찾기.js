function solution(array) {
    var answer = [];
    let max = Math.max(...array);
    
    answer = [max, array.indexOf(max)]
    
    return answer;
}