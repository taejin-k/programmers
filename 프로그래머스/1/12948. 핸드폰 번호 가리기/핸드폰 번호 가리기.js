function solution(phone_number) {
    var answer = '';
    let stars = '*'.repeat(phone_number.length - 4)
    
    answer = stars + phone_number.slice(stars.length)
    return answer;
}