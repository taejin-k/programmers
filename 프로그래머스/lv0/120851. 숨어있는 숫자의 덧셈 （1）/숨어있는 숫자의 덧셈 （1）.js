function solution(my_string) {
    var answer = 0;
    let arr = my_string.split('').filter(item => !isNaN(item));
    
    answer = arr.reduce((acc, cur) => acc + Number(cur), 0);
    return answer;
}