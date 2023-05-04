function solution(price) {
    var answer = price;
    
    if ( price >= 100000 && price < 300000 ) answer = Math.floor(price*95/100);
    if ( price >= 300000 && price < 500000 ) answer = Math.floor(price*90/100);
    if ( price >= 500000 ) answer = Math.floor(price*80/100);
    
    return answer;
}