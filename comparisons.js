console.log( 2 > 1)         // will give true 
console.log(2 >= 1)         // will give true
console.log(2 < 1)          // will give false 
console.log(2 == 1)         // will give false 
console.log(2 != 1)         // will give true


// the problem lies here : 

console.log("2"  == 2)            // it should give false as output but will give true

// because == (equality) operator does not check whether they are of same datatype or not 
// to overcome this problem we use strict equality operator(===). 

console.log("2" === 2)              // it will give false 

// same goes with != operator we should use !== to avoid this.

// we should only compare variables with same data types to avoid unpredictable outputs and avoid the following comparisons : 

 
console.log(null > 0)                     // ==> false 
console.log(null >= 0)                    // ==> true
console.log(null >= 0)                    // ==> true

console.log(undefined == 0)               // ==> false

// the reason is that an equality check == and  comparisons > <>= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3)  null >= 0 is true and (1) null > 0 is false.  

// Strict Comparison 

console.log("2" === 2)                    // ==> false because data type is different