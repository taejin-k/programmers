function solution(myString) {
    var answer = '';
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    
    answer = [...myString].map(item => arr.includes(item) ? 'l' : item).join('');
    return answer;
}