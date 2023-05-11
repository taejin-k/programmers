function solution(strArr) {
    var answer = [];
    answer = strArr.map((item, index) => {
        if ( index%2 ) return item.toUpperCase();
        else return item.toLowerCase();
    })
    return answer;
}