type Details1Type={
    name:string;
    userName:string
    role:number
    id:number
}
type OptionalDetails1Type={
    name?:string;
    userName:string
    role?:number
    id:number
}

//Mapped type
[2,3].map((s)=>s)

//Mapped
type MappedType<T>={
    [K in keyof T] : T[K]
}

//Partial
type PartialType<T>={
    [K in keyof T] +?: T[K]
}

//Readonly
type ReadonlyType<T>={
   readonly [K in keyof T] : T[K]
}

//Required
type RequiredType<T>={
[K in keyof T] -?: T[K]
}

type DetaisMappedType=Partial<Details1Type>
type DetaisReadOnlyType=Required<OptionalDetails1Type>

const value:DetaisReadOnlyType={
    id:3,
    name:"",role:3,userName:""
}

//

type KeyOfDetailsType="name"|"userName"|"address"|"data"
type NewDetailsType={
    name:string;
    age:number
} | {
    userName:string;
    age:number
} | {
    address:string;
    userName:string
}

type NewType<T,U>=T extends U ?never : T

type ExtractData34=NewType<KeyOfDetailsType ,"userName">
type ExtractData=NewType<NewDetailsType , { age:number}>
type ExcludeType<T,U>=T extends U ? never : T

type PickkingType<T,K extends keyof T>={
    [Key in K] : T[Key]
}

type Newdjk=PickkingType<Details1Type,"name"|"userName">

type OmittingType<T,K extends keyof T>=PickkingType<T,ExcludeType<keyof T,K>>

type eknrekr=OmittingType<Details1Type,"name"|"role">

// type Pickijtir<T,K extends keyof T>={

// }

type ProfilePic=string|null|undefined|number

type NonNullableType<T>=T extends null | undefined  ? never : T

type ejrke=NonNullableType<ProfilePic>

type MappedType34={
    +readonly [K in keyof Details1Type] +?: Details1Type[K]
}

type ExtractingType<T,U>=T extends U ? T : never

type ExtractType=Extract<keyof Details1Type , "name"|"role">

type PickingType<T, K extends keyof T>={
    [Key in K]:T[Key]
}

type fojdojkf=Omit<Details1Type,"name"|"role">





