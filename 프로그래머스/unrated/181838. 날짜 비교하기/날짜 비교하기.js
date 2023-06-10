function solution(date1, date2) {
    var answer = 0;
    
    let date_1 = new Date(date1);
    let date_2 = new Date(date2);
    
    answer = date_1 < date_2 ? 1 : 0;
    
    return answer;
}