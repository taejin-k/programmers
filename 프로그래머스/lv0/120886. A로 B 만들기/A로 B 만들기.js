function solution(before, after) {
    let answer = 0;
    let arr_before = [...before];
    let arr_after = [...after];
    
    answer = arr_before.sort().join('') === arr_after.sort().join('') ? 1 : 0;
    
    return answer;
}