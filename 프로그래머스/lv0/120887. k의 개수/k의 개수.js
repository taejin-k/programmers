function solution(i, j, k) {
    var answer = 0;
    let arr = Array.from({length: j}, (val, idx) =>  idx+1).filter(item => item >= i)
    
    answer = arr.join('').split('').filter(item => Number(item) === k).length;
    
    return answer;
}