const names = ['vansh','ritam','tamojeet'];
// for (const name of names){
//     console.log(`welcome,${name}!`);

// }

const numbers = [1,2,3];
for (const num of numbers){
    console.log((num*2))
}

function processData(arr,callBack){
    for (let value of arr){
        // welcomeNames(value)
        // numbersLogic(value)
        callBack(value)
    }
}


function welcomeNames(name){
    console.log(`welcome,${name}!`);
}

function numbersLogic(num){
    console.log(num*2);
}

// processData(names,welcomeNames)
// processData(numbers,numbersLogic)




function calculate(){
return function(){
    console.log('welcome to the class')
}}

let final = calculate()
console.log(final())