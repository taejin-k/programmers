function solution(price, money, count) {
    var answer = 0;
    let lastPrice = 0;
    
    for (let i=1; i<=count; i++) {
        lastPrice += price*i;
    }
    
    console.log(lastPrice)
    
    if ((money - lastPrice) >= 0) answer = 0
    else answer = Math.abs(money - lastPrice);

    return answer;
}