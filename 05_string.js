const name= "hitesh"
const repoCount= 50
//console.log("hello my name is " +name+ "my repo count "+ repoCount+"value");
//old way to 
console.log(`helo my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("hitesh-hc-com")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
const newString = gameName.substring(0,4);
console.log(newString)
console.log(gameName.indexOf('t'));
const anotherString= gameName.slice(-2,6);
console.log(anotherString);

const newStringOne="     aman    "
console.log(newStringOne)
console.log(newStringOne.trim())
//-_____________________________________________________________________________________________
//trim is used to hide the spac
//The trim() method of String values removes whitespace from both ends
//of this string and returns a new string, without modifying the original string.
//___________________________________________________________________________________

const url="http//hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar')) //include is used to check keyword are present or not.
console.log(gameName.split("-"))