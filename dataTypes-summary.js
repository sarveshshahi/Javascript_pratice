//primitive data types =>its call by value. (no memory reference.(coppy valuse asine)(all changes in coppy value)0.

//7 type : String , Number, boolean,null, undefind,symbol,BIgint

const score=100
const scoreValue=100.5

const isloggedIn =false
const outSidetemp= null
let userEmail;

const id=Symbol("123")
const anotherid=("123")

console.log(id===anotherid)
const bigNumber=236347278262838736478n
console.log(typeof outSidetemp)


// Reference (Non primitive)

//array, object,function

const hero=["shaktiman", "naagraj","doga"];
let myobj={  //its is obeject
    name:"hitesh", //data type kuch vi ho skta (string, boolean, number or other object)
    age:22,
}

const myFunction = function(){
    console.log("Hello wold")
}
console.log(typeof myFunction)

