//Array

const myArr=[0, 1 ,2 , 3, 4, 5]
const myHeors=["saktiman","nagraj"]

//const myArr2= new Array(1,2,3,4);
//console.log(myArr[0]);


//myArr.push(6); //add element
//myArr.pop(); //delete element
//console.log(myArr)
//myArr.unshift(9); // add then value from start
//myArr.shift();   //delet the value from end
//console.log(myArr);

const newarr=myArr.join();
//The join() method of Array instances creates and returns a new string by concatenating all of the elements
// in this array, separated by commas or a specified separator string.

console.log( myArr) //type=object
console.log(newarr);// type=>string
console.log(typeof newarr);

//slice splice
console.log("A",myArr)
console.log(myArr.slice(1,3))
console.log("B", myArr)

console.log(myArr.splice(1,3));
console.log("c",myArr);

