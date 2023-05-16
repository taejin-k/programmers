function solution(num_list) {
    var answer = 0;
    let even = 0;
    let odd = 0;
    
    for (let i=0; i<num_list.length; i++) {
        if ( (i+1)%2 === 1 ) {
            odd = odd + num_list[i];
        } else {
            even = even + num_list[i];
        }
    }
    
    answer = even > odd ? even : odd
    
    return answer;
}