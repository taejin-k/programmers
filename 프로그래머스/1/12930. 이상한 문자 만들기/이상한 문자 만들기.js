function solution(s) {
    var answer = '';
    
    answer = s.split(' ').map((item1, index1) => {
        return item1.split('').map((item2, index2) => index2%2 === 0 ? item2.toUpperCase() : item2.toLowerCase()).join('')
    }).join(' ')
    return answer;
}