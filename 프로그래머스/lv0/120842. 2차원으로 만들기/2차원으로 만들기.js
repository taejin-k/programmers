function solution(num_list, n) {
    let answer = Array.from(Array(num_list.length/n), () => new Array(n));
    let count = 0;
    
    for (let i=0; i<num_list.length/n; i++) {
        for (let j=0; j<n; j++) {
            answer[i][j] = num_list[count];
            count++
        }
    }
    return answer;
}