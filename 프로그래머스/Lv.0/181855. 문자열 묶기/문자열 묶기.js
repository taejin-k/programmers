function solution(strArr) {
    var answer = 0;
    let lengthArr = []
    
    for(i=0; i<strArr.length; i++) {
       lengthArr[strArr[i].length - 1] = (lengthArr[strArr[i].length - 1] || 0) + 1;
    }
    
    answer = Math.max(...lengthArr);
    
    return answer;
}