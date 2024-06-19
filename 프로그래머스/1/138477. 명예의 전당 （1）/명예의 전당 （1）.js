function solution(k, score) {
    var answer = [];
    let array = []
    
    for (let i=0; i<score.length; i++) {
        if (i < k) array[i] = score[i];
        else {
            if (score[i] > Math.min(...array)) {
                array.pop();
                array.push(score[i]) 
            }
        }
        
        array.sort((a, b) => b - a)
        answer.push(array.at(-1))
    }
    
    return answer;
}