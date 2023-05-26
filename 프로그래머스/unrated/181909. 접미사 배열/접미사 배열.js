function solution(my_string) {
    var answer = [];
    
    for (let i=1; i<=[...my_string].length; i++) {
        answer.push([...my_string].reverse().slice(0, i).reverse().join(''));
    }
    
    answer = answer.sort()
    
    return answer;
}