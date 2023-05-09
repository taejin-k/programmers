function solution(arr, n) {
    var answer = [];
    
    answer = arr.map((item, index) => {
        return (
            arr.length%2 === 1 ? (
                index%2 === 0 ? item + n : item 
            ) : (
                index%2 === 1 ? item + n : item            
            )
        )
    })
    
    return answer;
}