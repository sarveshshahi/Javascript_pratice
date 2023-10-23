//const tinderUser = new Object()
const  tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn =false




//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}

//const obj3={obj1,obj2}
//const obj3=Object.assign(  {},obj1,obj2,obj4) 

//mdn assignment in js
//
//const obj3={...obj1,...obj2}
//console.log(obj3);

//when come value of data base

const users=[ {
    id:1,
    email:"aman@gmail.com",
},
              {
                 id:1,
    email : "aman@gmail.com",
},
              {
                 id:1,
    email:"aman@gmail.com",
},
              {
                 id:1,
    email:"aman@gmail.com",
}
]

console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIN'))

 //**********************************destructring*********************

const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor: "hitesh"
}

const {courseInstructor:instructor}=course
console.log(instructor);


//{
//    "name":"hitesh",
//    "coursename":"js in hindi",
//    "price":"free",
//}

{
    {},
    {},
    {},
}