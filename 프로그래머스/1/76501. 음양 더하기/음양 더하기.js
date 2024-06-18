function solution(absolutes, signs) {
    var answer = 123456789;
    
    answer = absolutes.reduce((a, b, index) => a + (signs[index] ? (+b) : (-b)),0)
    return answer;
}