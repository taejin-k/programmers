function solution(a, b) {
    let days= ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var answer = 5;
    
    answer = answer + (b-1) > 6 ? (answer + (b-1))%7 : answer + (b-1);
    answer = answer + date.slice(0, (a-1)).reduce((a, b) => a + b, 0) > 6 ? (answer + date.slice(0, (a-1)).reduce((a, b) => a + b, 0))%7 : answer + date.slice(0, (a-1)).reduce((a, b) => a + b, 0);
    
        
    
    return days[answer];
}