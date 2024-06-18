function solution(price, money, count) {
    var answer = 0;
    
    for (let i=1; i<=count; i++) {
        answer = answer + price*i;
    }
    
    console.log(money)
    console.log(answer)
    
    if (money >= answer) return 0
    else return answer - money;

    return answer;
}