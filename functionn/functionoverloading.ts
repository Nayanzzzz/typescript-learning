//function signature

function  abcd(a:string):string
function abcd(a:string,b:number):number; 

function abcd(a:any , b?:any){

    console.log(typeof a, "==", typeof b)
    if(typeof a === "string" && typeof b === undefined){
        console.log("hello");
    }
    else if(typeof a === "string" && typeof b === "number"){
        console.log("123");
    }
    else {throw new Error("something is wrong");}
}
// console.log(abcd("hi" , 65))
console.log(abcd("hi"))

