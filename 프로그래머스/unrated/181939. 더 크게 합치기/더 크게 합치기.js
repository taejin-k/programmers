function solution(a, b) {
    var answer = 0;
    answer = Number(String(a) + String(b)) > Number(String(b) + String(a)) ? Number(String(a) + String(b)) : Number(String(b) + String(a));
    return answer;
}