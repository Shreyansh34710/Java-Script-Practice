let studentDate = {
    name: 'adi',
    age: 20,
    marks: 99,
    isPass: true,

    allies : ['shreyansh', 'shiv', 'ram'],

    address : {
        country: 'India',
        state :{
            stateName:'uttarkhand',
            cityName:'Haridwar'
    }

    
},
    hello : function(){
    console.log(studentDate.name ,'says hello to everyone')

},




}
// console.log(studentDate['name'])
// console.log(studentDate.address.state.cityName)
// console.log(studentDate['address']['state']['cityName'])


// studentDate.hello()

studentDate.gender = 'M'
studentDate.age = 22
delete studentDate.marks

console.log(studentDate)

