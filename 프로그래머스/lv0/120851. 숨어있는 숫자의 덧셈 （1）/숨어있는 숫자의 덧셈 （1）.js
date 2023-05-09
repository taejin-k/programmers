function solution(my_string) {
    var answer = 0;
    
    answer = [...my_string].map(item => isNaN(item) ? 0 : Number(item)).reduce((acc, cur) => { return ( acc + cur) }, 0);;
    
    return answer;
}