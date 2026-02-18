let newPromise = new Promise((resolve,reject)=>{
    let a = 5;
    let b = 5;
    if (a==b){
        resolve('Promise fullfilled...')
    }else{
        reject('Promise not fullfilled')
    }
})

console.log(newPromise)


newPromise
        .then((data)=>{
            console.log('Recieved data: ',data)
        })
        .catch((error)=>{
            console.log('error msg: ',error)
        })
        .finally(()=>{
            console.log('promise is done or not')
        })