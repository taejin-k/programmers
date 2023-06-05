function solution(arr, intervals) {
    var answer = [];
    intervals[0][1]++;
    intervals[1][1]++;
    
    answer.push(...arr.slice(...intervals[0]));
    answer.push(...arr.slice(...intervals[1]));
    
    return answer;
}