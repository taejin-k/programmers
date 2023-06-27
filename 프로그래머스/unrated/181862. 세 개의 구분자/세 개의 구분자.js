function solution(myStr) {
    var answer = [];
    let arr = ['a', 'b', 'c'];
    
    answer = [...myStr].map(item => arr.includes(item) ? ' ': item).join('').split(' ').filter(item => item !== '');
    
    answer = answer.length ? answer : ['EMPTY']
    
    return answer;
    
    
}