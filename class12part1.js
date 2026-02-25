async function fetchData(api) {
    let response = await fetch(api)
    if(response.ok){
        throw new Error('data not found')
    }

    let data = await response.json()
        console.log(data.title)
        console.log(data.brand)
}
fetchData(url)
