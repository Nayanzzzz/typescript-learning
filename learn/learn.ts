
// partial, keyof, typeof, pick, omit, returntype, (keyof typeof), Promise, genric, Record


interface IUser {
    id:number;
    f_name:string;
    l_name:string;
    age:number;
}

interface BaseResponse<T> {
    s:number;
    m:string;
    r:T
}


 function get_user<T>(v:T):T{

    return {}

 }

 const r = get_user<number>;
 const s = get_user<string>;

 let aa:string = "12";

 let bb:any = "12";

 aa == bb as string;

 let aabb: Record<string,number> = {f_name:12,l:"er"};


 let ac:string|null = null;

 const tt:string = ac!;


 function abcd (cd:(a:string)=>number):number{

    return cd("12")
 }

 function ss(b:string){ return 12}

 abcd(ss);


