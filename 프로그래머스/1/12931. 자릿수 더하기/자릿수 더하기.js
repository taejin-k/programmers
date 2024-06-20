function solution(n)
{
    var answer = 0;
    
    answer = [...String(n)].reduce((acc, cur) => acc + Number(cur), 0)

    return answer;
}