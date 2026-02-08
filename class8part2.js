function multiplier(num1){
    return function(num2){
        return num1*num2
    }
}

let final = multiplier(5)
let value = final(3)
console.log(value)