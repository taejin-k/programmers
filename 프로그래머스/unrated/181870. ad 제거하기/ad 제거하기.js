function solution(strArr) {
    var answer = [];
    
    answer = strArr.filter(item => !item.includes('ad'))
    return answer;
}