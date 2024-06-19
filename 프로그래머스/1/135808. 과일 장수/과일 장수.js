function solution(k, m, score) {
    var answer = 0;
    const array = score.sort((a, b) => b - a);
    
    for (let i=0; i<array.length; i=i+m) {
        let sliceArray = array.slice(i, i+m);
        
        if (sliceArray.length === m) {
            answer = answer + Math.min(...sliceArray)*m
        }
    }
    
    return answer;
}