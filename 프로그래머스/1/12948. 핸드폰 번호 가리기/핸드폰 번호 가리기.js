function solution(phone_number) {
    var answer = '';
    answer = [...phone_number.split('')].reverse().map((item, index) => {
        if (index < 4) return item
        else return '*'
    }).reverse().join('')
    return answer;
}