function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let tempGoal = [...goal]
    
    for (let i=0; i<goal.length; i++) {
        console.log(cards1, cards2)
        
        if (cards1[0] === tempGoal[0]) {
            cards1.shift();
            tempGoal.shift();
            continue;
        }
        
        if (cards2[0] === tempGoal[0]) {
            cards2.shift();
            tempGoal.shift();
            continue;
        } 
        
        return 'No'
    }
    
    return answer;
}