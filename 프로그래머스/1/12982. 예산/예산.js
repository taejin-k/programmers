function solution(d, budget) {
    let answer = 0;
    let money = 0;
    let sortedD = d.sort((a, b) => a - b); // 숫자 기준으로 정렬

    for (let i = 0; i < sortedD.length; i++) {
        if (money + sortedD[i] <= budget) {
            money += sortedD[i];
            answer++;
        } else {
            break; // 예산을 초과하면 루프 종료
        }
    }

    return answer;
}