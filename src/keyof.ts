interface DetailsType{
  name:string;
  role:number
  newName?:string
}

const details:DetailsType={
  name:"",
  role:3,
  newName:""
}

details["name"]

const onChange=<T extends keyof DetailsType>(key:T,value:DetailsType[T])=>{
  details[key]=value
}

onChange("role",34)
onChange("newName","wew")

const returnSameValue=<T>(a:T):T=>a