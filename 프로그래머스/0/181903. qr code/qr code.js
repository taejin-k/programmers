function solution(q, r, code) {
    var answer = '';
    let arr = []
    
    for (i=0; i<code.length; i++) {
        if(i%q === r) {
            arr.push([...code][i])
        } 
    }
    
    answer = arr.join().replaceAll(',', '')
    
    return answer;
}