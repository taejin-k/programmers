function solution(myString) {
    var answer = '';
    
    answer = myString.split('').map(item =>
        item === 'a' ? 'A' : item.toUpperCase() === item && item !== 'A' ? item.toLowerCase() : item
    ).join('')
    
    return answer;
}