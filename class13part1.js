const url_3 = "https://jsonplaceholder.typicode.com/users"

fetch(url_3).then((response)=>{
    if(!response.ok){
        throw new Error("Data not found: ",response.status)
    }
    return response.json()
}).then((data)=>{
    data.forEach((user) => {
        console.log("user name: ",user.name)
    });
}).catch((error)=>{
    console.log(error)
})