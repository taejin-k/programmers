function solution(t, p) {
    var answer = 0;
    
    for (let i=0; i<t.length -p.length+1; i++) {
        
       if (Number(t.slice(i, i+p.length)) <= Number(p)) {
           console.log(Number(t.slice(i, i+p.length)))
           answer++
       }
    }
    return answer;
}