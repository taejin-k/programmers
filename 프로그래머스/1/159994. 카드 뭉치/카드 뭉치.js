function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    for (let i=0; i<goal.length; i++) {        
        if (cards1[0] === goal[i]) {
            cards1.shift();
            continue;
        }
        
        if (cards2[0] === goal[i]) {
            cards2.shift();
            continue;
        } 
        
        return 'No'
    }
    
    return answer;
}