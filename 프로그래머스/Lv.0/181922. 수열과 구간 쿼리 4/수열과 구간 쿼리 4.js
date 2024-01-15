function solution(arr, queries) {
    var answer = [];
    
    for(i=0; i<queries.length; i++) {
        let first = queries[i][0];
        let second = queries[i][1];
        let third = queries[i][2];
        
        
        for (j=first; j<=second; j++) {
            if(j%third === 0) {
                arr[j] = arr[j] + 1
            }
        }
    }
    
    answer = arr; 
    
    return answer;
}