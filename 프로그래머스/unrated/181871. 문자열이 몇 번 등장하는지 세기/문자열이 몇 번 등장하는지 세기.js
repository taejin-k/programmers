function solution(myString, pat) {
    var answer = 0;
    
    for (let i=0; i<myString.length; i++) {
        if (myString.slice(i, pat.length+i) === pat) {
            answer++
        }    
    }
    
    return answer;
}