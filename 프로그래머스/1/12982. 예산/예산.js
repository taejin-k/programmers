function solution(d, budget) {
    var answer = 0;
    const sortedArray = d.sort((a, b) => a - b);
    
    for (let i=0; i<sortedArray.length; i++) {
        if (sortedArray[i] <= budget) {
            budget = budget - sortedArray[i];
            answer++
        }
    }
    
    return answer;
}