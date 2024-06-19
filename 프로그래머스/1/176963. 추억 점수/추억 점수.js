function solution(names, yearnings, photos) {
    var answer = [];
    
    for (let i=0; i<photos.length; i++) {
        let photo = photos[i];
        let count = 0;
        
        for (let j=0; j<names.length; j++) {
            let name = names[j];
            let yearning = yearnings[j]
            
            if(photo.includes(name)) {
                count+=yearning
            }    
        }
        
        answer.push(count)
    }
    
    return answer;
}