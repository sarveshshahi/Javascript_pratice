 //Dates
//Note - Date is a object in java script.++++++++++++++++++++++++
 
 
let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toLocaleTimeString())

//let myCreatedDate = new Date(2023, 0, 23) // month start in java script in 0)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2023, 0, 23, 15, 3,1)
//let myCreatedDate = new Date('2023-01-14')//(yy-mm-dd)
 
 let myCreatedDate = new Date("01-14-2023")  //(mm-dd-yy)
// console.log(myCreatedDate.toDateString())

 let myTimeStamp=Date.now() //excited time (used in pool, quiz for deciding fastest time)
 
 
// console.log(myTimeStamp); //(output milisecond)
// 
// console.log(myCreatedDate.getTime());
 console.log(Math.floor((Date.now()/1000)))
 
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
 console.log(newDate.getFullYear())
 
// `%{newDate.getMonth} and the time is`
 
 newDate.toLocaleString('default',{
     weekday:"long",
 })
 
