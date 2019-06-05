function rangFunction(arr){
    let result = [];
    if(result.length !== 0){
        if(result[0][1] < arr[0]){
            result[1] += arr;
        }
    }
    else{
        result[0] = arr;
    }
    console.log(result);
}