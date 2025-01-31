function abc():string{
    return "hi";
}

//function type 
//it is use in callback function 



function okay(name:string , func:(arg : string)=>void){
   func("whats")
}

okay("gill" , (arg : string)=>{
    console.log("okay")
})


//rest/spread operator

function sum(...arr : number[]){
    console.log(arr)
}

sum(1,2,3,4,5,6,7);



