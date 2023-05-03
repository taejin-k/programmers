function solution(num_list) {
    var answer = 0;
    
    let times = num_list.reduce((acc, cur) => acc*cur, 1);
    let sum = num_list.reduce((acc, cur) => acc+cur, 0)
    
    answer = times < sum*sum ? 1 : 0
    
    return answer;
}