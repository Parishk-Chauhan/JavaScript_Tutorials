// conversion in js : 

let score = 23;

console.log(typeof(score))  // type is used to get the type of variables (can also be written as : console.log(typeof score))

let name = "33"

console.log(typeof name)   // this will give string as an output because it is in "" inverted commas. 

// converting a string to a Number : 

let valueInNumber = Number(name)       // name is converted to number 

console.log(typeof(valueInNumber))
console.log(valueInNumber)

let notANumber = "33abc"

let notNumberInNumber = Number(notANumber)        //the conversion will go through 

console.log(typeof(notNumberInNumber))                       // output will be number 

console.log(notNumberInNumber)           // the output here will be "NaN" which stands for Not a Number 

// the value of null will be converted to zero using Number conversion method and the value of undefined will be NaN 
// true value will be converted to 1 and false will be converted to zero 




/* 
"33"  ==> 33
"33abc"  ==> NaN (but type will be converted)
true ==> 1
false  ==> 0
undefined ==> NaN
null ==> 0
*/


//converting into boolean  : 

let isLoggedIn = 10

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanisLoggedIn)
console.log(booleanisLoggedIn)

/* 
1 or any other number will be converted in true and zero in false 
"" empty string will be converted in false 
"some string"  will be converted in true
*/

// converting into String : 

let someNumber = 23

let someString =String(someNumber)
console.log(someString)
console.log(typeof someString)

// *********************************** OPERATIONS ***********************************

// Mathematical operations : 

console.log(3+3)          // as expected will give 6 as output to console 
console.log(3*3)          // 9
console.log(3-3)          // 0
console.log(3/3)          // 1
console.log(3%3)          // 0 (remainder)
console.log(2**3)         // 2 is raised to the power 3 ==> 8

const value = 10
const negativeValue = -value 
console.log(negativeValue)     // ==> -10 

// Concatenating two strings : 

let str1 = "hello "
let str2 = "Parishk"

let str3 = str1 + str2
console.log(str3)                 // ==> "hello Parishk"


//js memes : 

console.log("1" + 2)                   // ==> "12" will be the output 
console.log(1 + "2")                   // ==>  "12"                    
console.log("1" + 2 + 2)               // ==> "122" of string type js will automatically last two numbers to strings 
console.log(1 + 2 + "2")               // ==>  "32"  first 1 and 2 will be added as numbers than they will be converted to string to be added to "2"



console.log(+true)                  // ==> 1
console.log(+"")                    // ==> 0 plus is used to do conversion into numbers

let gameCounter=100
console.log(gameCounter++)          // here output will be 100 but after that value will be 101
console.log(++gameCounter)          // here output will be 102 because adding 1 to 101 and then it goes to console 
