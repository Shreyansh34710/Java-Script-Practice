let product=[
    {   name:'Laptop',
        price:50000,
        inStock:true
    },
    {
        name:'Mobile',
        price:30000,
        inStock:false
    },
    {
        name:'Tablet',
        price:20000,
        inStock:true
    }
]

let inStoks = product.filter((item)=>{
    return item.inStock
})

// console.log(inStoks)


// map -> array.map((element,index,array)=>{
//  })
let numbers = [1,2,3,4,5]

// let double = numbers.map((num)=>{
//     return num*2
// })

// console.log(double)



let finalPrice = product.filter((item)=>{
    return item.inStock
}).map((gst)=>{
    return gst.price+gst.price*0.18
})
// console.log(finalPrice)


// let forE = numbers.forEach((num)=>{
//     console.log(num*2)
// })


let newNumber= numbers.find((num)=>num>2)
console.log(newNumber)