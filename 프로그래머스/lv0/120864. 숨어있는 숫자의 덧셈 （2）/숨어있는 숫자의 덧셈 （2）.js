function solution(my_string) {
    var answer = 0;
    
    answer = [...my_string].map(item => !isNaN(item) && item).join('').split('false');
    answer = answer.reduce((acc, cur) => acc + (cur === '' ? 0 : Number(cur)), 0)
                                   
    return answer;
}