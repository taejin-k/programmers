function solution(num_list, n) {
    var answer = [];
    let first = num_list.slice(0, n);
    let second = num_list.slice(n, num_list.length)
    
    answer = [...second, ...first]
    return answer;
}