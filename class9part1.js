let numbers = [1,2,3,4,5]

numbers.filter(function(num){
    return num%2==0
})


let divByTwo = numbers.filter(function(num){
    return num%2==0
})

console.log(divByTwo)