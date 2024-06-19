function solution(answers) {
    let array = [0, 0, 0];
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for (let i = 0; i < answers.length; i++) {
        if (first[i % first.length] === answers[i]) array[0]++;
        if (second[i % second.length] === answers[i]) array[1]++;
        if (third[i % third.length] === answers[i]) array[2]++;
    }

    let maxScore = Math.max(array[0], array[1], array[2]);
    let answer = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxScore) {
            answer.push(i + 1);
        }
    }

    return answer;
}