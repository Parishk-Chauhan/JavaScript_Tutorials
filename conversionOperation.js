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

