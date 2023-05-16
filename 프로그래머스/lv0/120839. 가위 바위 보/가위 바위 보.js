function solution(rsp) {
    var answer = '';
    let obj = { 2: 0, 0: 5, 5: 2 }
    
    answer = rsp.split('').map(item => obj[item]).join('');
    return answer;
}