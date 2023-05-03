function solution(arr, k) {
    var answer = [];
    
    if (k%2) {
        answer = arr.map(item => item*k);
    } else {
        answer = arr.map(item => item + k);
    }
    
    return answer;
}