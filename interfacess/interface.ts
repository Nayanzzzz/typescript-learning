interface User{
    name:string,
    email:string,
    password:string,
    gender?:string
}


function abc(obj:User){
    console.log(obj);
}

abc({name:"hi" , email:"hi@gmail.com" , password:"zero" ,gender:"male"})


//extende use 
interface abcd extends User{
    salary : number
}

function xyz(obj:abcd){
    console.log(obj);
}

xyz({name:"hu" , email:"z@gmail.com" , password:"jhb" , salary:6546})