function solution(arr, queries) {
    var answer = [];
    
    for (let i=0; i<queries.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if ( queries[i][0] <= j && queries[i][1] >= j) {
                arr[j] = arr[j] + 1;
            }
        }
    }
    
    answer = arr;
    
    return answer;
}