function solution(my_string) {
    var answer = '';
    let alp = ['a', 'e', 'i', 'o', 'u'];
    
    answer = my_string.split('').filter(item => !alp.includes(item)).join('');
    
    return answer;
}