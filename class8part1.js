let numbers = [1,2,3,4,5]
function myFilter(arr,callback){
    let newArr = []
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

function divByTwo(num){
    return num%2==0
}

function greater(num){
    return num>3
}

// myFilter(numbers,greater)
let ans = myFilter(numbers,(num)=>num%5==0)
console.log(ans)