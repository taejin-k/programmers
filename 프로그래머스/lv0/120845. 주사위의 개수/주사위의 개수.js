function solution(box, n) {
    var answer = 0;
    let x = Math.floor(box[0]/n);
    let y = Math.floor(box[1]/n);
    let z = Math.floor(box[2]/n);
    
    answer = x * y * z;
    
    return answer;
}