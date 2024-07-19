// declaring a variable : 

/* There are mainly two ways of declaring a variable in js :

1. let  : variables declared using "let" keyword can be changed later in code 

2. const : variables declared using "const" keyword can't be changed later in code

*/


let firstName = "Parishk"

const lastName = "Chauhan"

age = 22  // this is also a to declare a variable but avoid this. 

console.log(firstName)

console.log(lastName)

console.log(age)

// till now everthing works fine 

// here lets try to change firstName : 

firstName = "Virat"

console.log(firstName)  // here the firstname will change to Virat 

// now lets try to change lastName 

// lastName = "kohli" this will not work and give TypeError: Assignment to constant variable. 

// hence variables declared wih const can't be changed 

age = 35 // this can also be done. 

console.log(age)    


/* there is alternate for "let" which is : "var" but we don't use var because it had no sense of block scope and functional scope*/

var name = "Nandani Chauhan"

console.log(name)


// Declaring a variable without initialising it 

let userStatus; 

console.log(userStatus)   // this will give undefined to the console 