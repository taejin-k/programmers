function solution(sizes) {
    let width = 0;
    let height = 0;
    
    for (let i=0; i<sizes.length; i++) {
        let sortedSize = sizes[i].sort((a, b) => a -b);
        if (sortedSize[0] > width) width = sortedSize[0];
        if (sortedSize[1] > height) height = sortedSize[1];    
    }
    
    return width * height;
}