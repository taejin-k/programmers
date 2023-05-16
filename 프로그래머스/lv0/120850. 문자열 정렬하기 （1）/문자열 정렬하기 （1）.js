function solution(my_string) {
    var answer = [];
    answer = my_string.split('').sort().filter(item => !isNaN(item)).map(item => Number(item));
    
    return answer;
}