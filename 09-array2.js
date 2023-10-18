const marbel_hero=["ironman","thor","caption_america"]
const dc_hero=["superman", "batman", "flash"]
//marbel_hero.push(dc_hero); //we can declear a array in to a arry

//console.log(marbel_hero);
//console.log(marbel_hero[3][1]);
//
// const newArr=marbel_hero.concat(dc_hero);
//console.log(newArr);

//spread method to combine two arrays
// const all_heros=[...marbel_hero,...dc_hero];
// console.log(all_heros)
//
//const another_array=[1,2,3,[4,5,6],7,[6,7,[8,4,3]]]
//const real_another_array =another_array.flat(Infinity)
//console.log(real_another_array);
 
 //isArray   from

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))

console.log(Array.from({name:"hitesh"}))//spical case if key is present the from not conver the string in array
//output => [] =>empty array

const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3))

