let result = [];
function rangFunction(arr){
    
    if(result.length !== 0){
        if(result[0][1] < arr[0]){
            result.push(arr);
        }
    }
    else{
        result[0] = arr;
    }
    console.log(result);
}