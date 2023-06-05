function solution(arr, queries) {
    var answer = [...arr];
    
    for (let i=0; i<queries.length; i++) {
        let a = Array.from(
            {length: queries[i][1] + 1}, (val, idx) => idx).filter(item => {
            return item >= queries[i][0]     
        })
        
        for (let j=0; j<a.length; j++) {
            answer[a[j]] = answer[a[j]] + 1
        }
    }
    
    return answer;
}