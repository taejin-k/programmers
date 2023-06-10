function solution(myString, pat) {
    var answer = '';
    let pos = myString.lastIndexOf(pat);
    
    answer = myString.slice(0, pos) + pat
    
    return answer;
}