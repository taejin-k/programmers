function solution(n, slicer, num_list) {
    var answer = [];
    
    if (n === 1) {
        answer = num_list.slice(0, slicer[1] + 1);
    }
    
    if (n === 2) {
        answer = num_list.slice(slicer[0], num_list.length + 1)
    }
    
    if (n === 3) {
        answer = num_list.slice(slicer[0], slicer[1] + 1)
    }
    
    if (n === 4) {
        answer = num_list.slice(slicer[0], slicer[1] + 1).filter((item, index) => (index+slicer[2])%slicer[2] === 0)
    }
    
    [2,3,4,5,6]
    [2,3,4,5,6]
    
    return answer;
}