const stringEx:string="String example"
const numberEx:number=34
const arrayEx:Array<number>=[24]
const arrayEx2:number[]=[24]
const objectEx:Record<string,any>={
    name:"Something"
}
const newObject =new Object()

const add=(value:object)=>console.log(Object.keys(value))

add({name:"Something"})
add([])


// const add=(value:Record<string,any>)=>console.log(Object.keys(value))

// add({name:"Something"})
// add(3)
// add("name")


