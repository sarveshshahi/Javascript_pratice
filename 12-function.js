//function sayMyname(){
//    console.log("H");
//    console.log("I");
//    console.log("T");
//    console.log("E");
//    console.log("s");
//    console.log("h");
//}
//sayMyname();
//
////sayMyname->reference // () exicuition.
//
//function addTwonumber(number1,number2){       //(number1, number2)//pairameter
//// let result=number1+number2;
////    return result
//    return number1 + number2;
//}
//const result = addTwonumber(3,4); //()argument.//ans =8
//
//console.log("REsult : ", result);//{if we not return the value of result : (ans=>undefind)}
//
//function loginUserMassage(username){
//    if(username===undefined){
//        console.log("please enter a username");
//        return;
//        
//    }
//    return `${username} just logined in`
//}
//const userName=loginUserMassage();
//console.log(userName);












function calculateCardPrice(val1, val2, ...num1){   //... rest operater
    return num1
}

console.log(calculateCardPrice(200, 400, 500, 2000))
//val1=200, val=400, ...num1=>[500, 2000]

const user ={
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 300
})

const myNewArray= [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[2]
    
}
//console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([200,400,600,1000]))


