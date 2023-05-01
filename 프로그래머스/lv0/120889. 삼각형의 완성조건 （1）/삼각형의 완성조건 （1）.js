function solution(sides) {
    var answer = 0;
    
    let sum = sides.reduce((acc, cur) => acc + cur, 0);
    let max = Math.max(...sides);
    
    answer = max < sum - max ? 1 : 2;
    return answer;
}