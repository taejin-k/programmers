function solution(myString, pat) {
    var answer = 0;
    let reverse = myString.split('').map(item => item === "A" ? 'B' : 'A').join('');
    answer = reverse.includes(pat) ? 1 : 0
    return answer;
}