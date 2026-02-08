let arr = [5, 10,'rahul', true, undefined, null, [1,2,3,4,5]]
console.log(arr)
console.log(arr.length)
console.log(arr[2])


for (let i=2; i<arr.length; i++)
    console.log(arr[i])


for(let value of arr ){
    console.log(value)
}

let num = 'rahul'
for (let n of num){
    console.log(n)
}

num.push(6)
num.pop()
num.unshift(0)
num.shift()
console.log(num)


let numsilce = num.slice(1,4)
console.log(num.includes(5))

let number = [4,1,5,4,3]
console.log(number.sort((a,b)=>a-b))
console.log(number.sort((a,b)=>b-a))