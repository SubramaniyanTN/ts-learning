const stringName:string="something"
const numberName:number=34
const anyName:any = 34
const date=new Date()
const unKnownName:unknown="something"


stringName.indexOf("3") //indexOf method is for string
// numberName.indexOf("3")
anyName.indexOf("3")
if(typeof unKnownName ==='string'){
    unKnownName.indexOf("3")
}
date.getFullYear()


// date.getFullYear()
// stringName.getFullYear()
// anyName.getFullYear()

