function solution(num_list) {
    var answer = 0;
    
    for (let i=0; i<num_list.length; i++) {
        let number = num_list[i];
        
        while ( number !== 1 ) {
            if (number % 2 === 0) {
                number = number/2;
            } else if ( number % 2 !== 0 ) {
                number = (number-1)/2;    
            }
            
            answer++;
        }
    }
    
    return answer;
}