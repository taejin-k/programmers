function solution(hp) {
    var answer = 0;
    let first = Math.floor(hp/5);
    let second = Math.floor((hp%5)/3);
    let third = Math.floor(((hp%5)%3)/1);
    
    answer = first + second + third;
    return answer;
}