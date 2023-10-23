//singletone
//obejcet creation
//object literals
const mysym =Symbol("key1");

const JsUser={
    name:"aman",
    "full Name":"hitesh",
    [mysym]:"mykey1",
    age:10,
    location:"noida",
    email:"aman@google.com",
    isLoggedIn: false,
    lastLoggingDays:["monday","staturday"],
}
console.log(JsUser.name)
console.log(JsUser["email"])
console.log(JsUser["full Name"])
console.log( JsUser[mysym])


JsUser.email="aman@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="aman@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js User");
}

JsUser.greetingtwo = function(){
    console.log(`hello js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo())