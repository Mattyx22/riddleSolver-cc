function generate(){
    let length = parseInt(prompt('Give the length of array'));
    let height = parseInt(prompt('Give the height of array'));
    let start = parseInt(prompt('Give min number'));
    let end = parseInt(prompt('Give max number'));
    let array = [[]];

    for(i=0; i < length; i++){
        array.push([]);
        for(j=0; j<height-1; j++){
            array[i][j] = parseInt(Math.random() * (end - start) + start);
        }
    }

    console.log(array);
    return array;

}