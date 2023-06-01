function solution(todo_list, finished) {
    var answer = [];
    
    answer = todo_list.filter((item, index) => !finished[index])
    return answer;
}