type again= string | number ;

let t:again="hi";
console.log(t)

//union

let w:number | string;

//intersection 

type user ={
    name : string ,
    email : string
} 

type admin = user & {
    getData(user : string):void

}

function abcd(a:admin){
    a.email = "gmail@d"
    a.getData("hi")
    
}
