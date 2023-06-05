function solution(num, k) {
    let answer = 0;
    let flag = [...String(num)].includes(String(k));
    
    if ( flag ) {
        answer = [...String(num)].indexOf(String(k)) + 1;
    } else {
        answer = -1;
    }
    return answer;
}